#!/bin/bash

source ./secretGithub.sh

readonly MAX_JOB=32

readonly REPOS_FOLDER="/srv/sgen/repos"
readonly SOURCE_FOLDER=`pwd`

readonly JEKYLL_SOURCE="/srv/programmation/Ruby/sgen"
readonly JEKYLL_DESTINATION="/srv/programmation/Github/LomigLavnek.github.io"

readonly PROJECTLIST_FILE=$JEKYLL_SOURCE'/index.html'
readonly COMMITLIST_FILE=$JEKYLL_SOURCE'/index-commit.html'
readonly LOG_FILE="/tmp/sgen.log"

readonly GIT=`whereis git | awk '{print $2}'`
readonly GITHUB_API_URL="https://api.github.com"


# Fontion principale
main(){
    git_clone 
    # Mise à jour des dépots
    cd $REPOS_FOLDER
    folder_list=`find * -type d -prune`   
    echo $folder_list

    count=0
    for folder in $folder_list;
    do
        git_check $folder &
        if [[ $count == $MAX_JOB ]];
        then
            wait
            count=0
        fi
        count=$(( $count+1 ))
    done

    # Génération de la page index
    echo $REPOS_FOLDER
    cd $REPOS_FOLDER
    
    echo "---" > $PROJECTLIST_FILE
    echo "layout: liste" >> $PROJECTLIST_FILE
    echo "---" >> $PROJECTLIST_FILE

    echo "---" > $JEKYLL_SOURCE/index-commits.html
    echo "layout: liste-commits" >> $JEKYLL_SOURCE/index-commits.html
    echo "---" >> $JEKYLL_SOURCE/index-commits.html

    for folder in $folder_list;
    do
        bash $SOURCE_FOLDER/project.sh $folder
        history_log $folder
        date_log $folder
        info_github $folder $GITHUB_USERNAME $GITHUB_PASSWORD
    done

    # Génération de index-codeline
    count=0
    for folder in $folder_list;
    do
        codeline $folder &
        if [[ $count == 16 ]];
        then
            wait
            count=0
        fi
        count=$(( $count+1 ))
    done
    wait

    echo "---" > $JEKYLL_SOURCE/index-codeline.html
    echo "layout: liste-codeline" >> $JEKYLL_SOURCE/index-codeline.html
    echo "---" >> $JEKYLL_SOURCE/index-codeline.html

    for folder in $folder_list;
    do
        index_codeline $folder
    done
    echo "</tbody></table></div>" >> $JEKYLL_SOURCE/index-codeline.html

    # Creation des stats auteurs
    cd $JEKYLL_SOURCE/_scripts
    for folder in $folder_list
    do
        SAVEIFS=$IFS
        IFS=$(echo -en "\n\b")

        rm $JEKYLL_SOURCE/_scripts/author/$folder
        author=`cat hist/$folder | awk -F',' '{print $8}' | sort | uniq`

        for a in $author
        do
            nbcommit=`cat hist/$folder | grep $a | wc -l`
            lineadded=`cat hist/$folder | grep $a | awk -F',' '{s+=$2} END {print s}'`
            lineremoved=`cat hist/$folder | grep $a | awk -F',' '{s+=$3} END {print s}'`
            totallline=`cat hist/$folder | grep $a | awk -F',' '{s+=$4} END {print s}'`
            firstcommit=`cat hist/$folder | grep $a | awk -F',' '{print $9}' | tail -n 1`
            lastcommit=`cat hist/$folder | grep $a | awk -F',' '{print $9}' | head -n 1`
            echo "$a"', '$nbcommit', '$lineadded', '$lineremoved', '$totallline','$firstcommit', '$lastcommit >> author/$folder
            echo $folder, "$a"', '$nbcommit', '$lineadded', '$lineremoved', '$totallline','$firstcommit', '$lastcommit >> /tmp/sgen.log
        done
        IFS=$SAVEIFS
    done

    cd $JEKYLL_SOURCE
    jekyll build

    cd $JEKYLL_DESTINATION
    git add .
    git commit -m $(date +'%x:%X')
    git push origin master
}

codeline(){
    cd /srv/sgen/repos/$1
    echo "Codeline $1" >> /tmp/sgen.log
    cloc --csv --quiet --out=$JEKYLL_SOURCE/_scripts/hist/$1.csv ./
    echo "---" > $JEKYLL_SOURCE/cloc/$1.md
    echo "layout: project-loc" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "title: $1 Line of code" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "ssg: $1" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "---" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<div class=\"table-responsive\">" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<table class=\"table\">" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<thead><tr>" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<th>Language</th>" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<th>Files</th>" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<th>Blank</th>" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<th>Comment</th>" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "<th>Code</th>" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "</tr></thead><tbody>" >> $JEKYLL_SOURCE/cloc/$1.md
    cat $JEKYLL_SOURCE/_scripts/hist/$1.csv | sed 1d | \
        awk  -F',' '{print "<tr><td>"$2"</td><td>",$1"</td><td>",$3"</td><td>",$4"</td><td>",$5"</td></tr>"}' >> $JEKYLL_SOURCE/cloc/$1.md
    cat $JEKYLL_SOURCE/_scripts/hist/$1.csv | sed 1d | \
        awk -F',' '{file+=$1; blank+=$3; comment+=$4; code+=$5} END {print "<tr><td>Total</td><td>"file"</td><td>"blank"</td><td>"comment"</td><td>"code"</td></tr>"}' >> $JEKYLL_SOURCE/cloc/$1.md
    echo "</tbody></table></div>" >> $JEKYLL_SOURCE/cloc/$1.md
    echo "Codeline $1 effectué" >> /tmp/sgen.log
}

index_codeline(){
    echo "index codeline: $1" >> /tmp/sgen.log
    echo "<tr><td><a href="./details/$1.html">$1</a></td>" >> $JEKYLL_SOURCE/index-codeline.html
    cat $JEKYLL_SOURCE/_scripts/hist/$1.csv |sed 1d | \
        awk -F',' '{ file+=$1; blank+=$3; comment+=$4; code+=$5 } END {printf "%s, %s, %s, %s\n", file, blank, comment, code}' | \
        awk '{ blankp=$2*100/($2+$3+$4); commentp=$3*100/($2+$3+$4); codep=$4*100/($2+$3+$4) } END {printf "<td>%s</td><td>%s</td><td>%2.2f'%'</td><td>%s</td><td>%2.2f'%'</td><td>%s</td><td>%2.2f'%'</td>", $1,  $2, blankp, $3, commentp, $4, codep}' >> $JEKYLL_SOURCE/index-codeline.html

}

# Récupère les infos commits par commits
history_log(){
    cd $REPOS_FOLDER/$1
    echo "" > $JEKYLL_SOURCE/_scripts/hist/$1
    git log --oneline --no-merges --pretty=format:"%H" | \
        while read commit
        do
            changes=$(git log -n 1 --no-merges --format= --shortstat $commit | \
                awk '{print $4,","$6,","$4 - $6}')
            nbfiles=$(git log -n 1 --no-merges --format= --numstat $commit | wc -l)
            git checkout -q $commit
            totallines=`git ls-files | xargs cat | wc -l`
            totalfiles=`git ls-files | wc -l`
            author=$(git log -n 1 --no-merges --format="%aN, %at" $commit)
            echo $commit","$changes","$nbfiles","$totalfiles","$totallines","$author >> $JEKYLL_SOURCE/_scripts/hist/$1
            echo $1","$commit","$changes","$nbfiles","$totalfiles","$totallines","$author >> /tmp/sgen.log
        done
    git checkout master
}

# Information sur les dates
date_log(){
    echo "" > $JEKYLL_SOURCE/_scripts/date/$1
    echo "" > $JEKYLL_SOURCE/_scripts/commits/$1-12month
    echo "" > $JEKYLL_SOURCE/_scripts/commits/$1-20week
    echo "" > $JEKYLL_SOURCE/_scripts/commits/$1-lastyears
    echo "" > $JEKYLL_SOURCE/_scripts/commits/$1-dayweek
    echo "" > $JEKYLL_SOURCE/_scripts/commits/$1-month
    echo "" > $JEKYLL_SOURCE/_scripts/commits/$1-hourday
    echo "" > $JEKYLL_SOURCE/_scripts/commits/$1-hourweek

    dates=`cat $JEKYLL_SOURCE/_scripts/hist/$1 | awk -F',' '{print $9}'`
    for line in $dates
    do
        d=`date -d @$line +"%Y %m %d %V %u %H"`
        echo $d >> $JEKYLL_SOURCE/_scripts/date/$1
    done
    cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $1, $2}' | sort -k2 -k3 | uniq -c | sort -k2 -k3 | tail -n 12 >> $JEKYLL_SOURCE/_scripts/commits/$1-12month
    cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $1, $4}' | sort -k2 -k3 | uniq -c | sort -k2 -k3 | tail -n 20 >> $JEKYLL_SOURCE/_scripts/commits/$1-20week
    cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $1}' | sort -k2 -k3 | uniq -c | sed 1d | sort -k2 -k3 >> $JEKYLL_SOURCE/_scripts/commits/$1-lastyears
    cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $5}' | sort | sed 1d | uniq -c >> $JEKYLL_SOURCE/_scripts/commits/$1-dayweek
    cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $2}' | sort | sed 1d | uniq -c >> $JEKYLL_SOURCE/_scripts/commits/$1-month
    cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $6}' | sort | sed 1d | uniq -c >> $JEKYLL_SOURCE/_scripts/commits/$1-hourday
    cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $5, $6}' | sort | sed 1d | uniq -c >> $JEKYLL_SOURCE/_scripts/commits/$1-hourweek
}
# Clone les dépôts Github du fichier list.csv
git_clone(){
    repository=`awk -F',' '{print $2}' list.csv | sed 1d`
    for line in $repository
    do
        github="https://$GITHUB_USERNAME:$GITHUB_PASSWORD@github.com/"$line".git"
        cd $REPOS_FOLDER
        git clone $github &> /dev/null
        if [[ $? -eq 0 ]];
        then
            echo "Clonage de $github effectué" >> $LOG_FILE
        fi
    done
}

# Vérifie si les dépots ont besoin d'être mis à jour
#
# params:
#   - $1: répertoire du dépôt Git
git_check(){
    cd $REPOS_FOLDER/$1
    $GIT remote update >&-

    local_repo=`$GIT rev-parse @`
    remote_repo=`$GIT rev-parse @{u}`
    base_repo=`$GIT merge-base @ @{u}`

    if [[ $local_repo = $remote_repo ]];
    then
        echo "Dépot à jour : $1" >> $LOG_FILE
    elif [[ $local_repo = $base_repo ]];
    then
        git_pull $1 &
    elif [[ $remote_repo = $base_repo ]];
    then
        echo $1
        git checkout master
        git_check $1
        echo "Need to push"
    else
        echo "Diverged"
    fi
}

# Mise à jour des dépots Github
#
# params:
#   - $1: répertoire du dépot Git

git_pull(){
    echo "## Mise à jour des dépots Git" >> $LOG_FILE
    echo "Mise à jour de $1" >> $LOG_FILE
    git pull > /dev/null 
    echo "Mise à jour de $1 terminée" >> $LOG_FILE
}

# Mise à jour des infos des dépots Github
#
# params:
#   - $1: répertoire du dépot Git

info_github(){
    cd /srv/sgen/repos/$1
    url=`git config --get remote.origin.url`
    url=`echo ${url:45}`
    url=`echo ${url::-4}`
    if [[ $1 != "" ]];
    then
        local url="$GITHUB_API_URL/repos/$url"
    else
        exit 1
    fi
    if [[ $2 != "" &&  $3 != "" ]]
    then
        repository_info=`curl --user "$2:$3" $url`
    else
        repository_info=`curl $url`
    fi
    check=`echo $repository_info | jq '.full_name'`
    if [[ $check == "null" ]];
    then
        ## Le dépot Git n'existe pas
        exit 1
    else
        homepage=`echo $repository_info | jq ".homepage"`
        homepage=${homepage//\"/}
        description=`echo $repository_info | jq ".description"`
        description=${description//\"/}
        github_url=`echo $repository_info | jq ".html_url"`
        github_url=${github_url//\"/}
        clone_url=`echo $repository_info | jq ".clone_url"`
        clone_url=${clone_url//\"/}
        star=`echo $repository_info | jq ".stargazers_count"`
        fork=`echo $repository_info | jq ".forks_count"`
        issues=`echo $repository_info | jq ".open_issues"`
        created_at=`tail -n 1 $JEKYLL_SOURCE/_scripts/hist/$1 | awk -F',' '{print $9}'`
        created_at=`echo ${created_at:1}`
        created_at=`date -d @$created_at +"%Y-%m-%d %H:%M:%S"`
        updated_at=`head -n 2 $JEKYLL_SOURCE/_scripts/hist/$1 | tail -n 1 | awk -F',' '{print $9}'`
        updated_at=`echo ${updated_at:1}`
        updated_at=`date -d @$updated_at +"%Y-%m-%d %H:%M:%S"`
        first=`cat $JEKYLL_SOURCE/_scripts/hist/$1 | awk -F',' '{print $9}' | tail -n 1`
        last=`cat $JEKYLL_SOURCE/_scripts/hist/$1 | awk -F',' '{print $9}' | sed 1d | head -n 1`
        diff=$(( ($last - $first)/86400 ))
        activity=`cat $JEKYLL_SOURCE/_scripts/date/$1 | awk '{print $1, $2, $3}' | uniq | wc -l`       
        p_activity=`echo "scale=3;($activity/$diff)*100" | bc`
        language=`grep $JEKYLL_SOURCE/_scripts/list.csv -e $1 | awk -F', ' '{print $3}'`
        avatar=`echo $repository_info | jq ".owner.avatar_url"`
        avatar=${avatar//\"/}
        nbcommit=`cat $JEKYLL_SOURCE/_scripts/commits/$1`
        nbcommitday=`echo "scale=2;($nbcommit/$diff)" | bc`
        nbcommitactiveday=`echo "scale=2;($nbcommit/$activity)" | bc`
        licence=`grep $JEKYLL_SOURCE/_scripts/list.csv -e $1 | awk -F ', ' '{print $4}'`

        detail=$JEKYLL_SOURCE/details/$1.md
        echo "---" > $detail
        echo "layout: project" >> $detail
        echo "title: $1" >> $detail
        echo "homepage: $homepage" >> $detail
        echo "html_url: $github_url" >> $detail
        echo "clone_url: $clone_url" >> $detail
        echo "stargazer: $star" >> $detail
        echo "fork: $fork" >> $detail
        echo "issues: $issues" >> $detail
        echo "created: $created_at" >> $detail
        echo "update: $updated_at" >> $detail
        echo "total_days: $diff" >> $detail
        echo "active_days: $activity" >> $detail
        echo "p_activity: $p_activity" >> $detail
        echo "nbcommit: $nbcommit" >> $detail
        echo "nbcommitday: $nbcommitday" >> $detail
        echo "nbcommitactiveday: $nbcommitactiveday" >> $detail
        echo "language: $language" >> $detail
        echo "avatar: $avatar" >> $detail
        echo "licence: $licence" >> $detail
        echo "---" >> $detail



        ## Génération de $PROJECTLIST_FILE
        nbcontrib=`cat $JEKYLL_SOURCE/_scripts/contrib/$1`
        github_url=${github_url:19}
        echo "<tr><td><a href=\"./details/"$1".html\">"$1"</a></td>" >> $PROJECTLIST_FILE
        echo "<td>"$licence"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$nbcontrib"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$nbcommit"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$star"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$fork"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$issues"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$language"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$created_at"</td>" >> $PROJECTLIST_FILE
        echo "<td>"$updated_at"</td>" >> $PROJECTLIST_FILE
        echo "<td><a href=\"https://github.com/"$github_url"\">"$github_url"</a></td>" >> $PROJECTLIST_FILE

        ## Génération de la page index-commit 
        echo "index commits: $1" >> /tmp/sgen.log
        echo "<tr><td><a href="./details/$1.html">$1</a></td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$created_at</td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$updated_at</td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$diff</td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$activity</td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$p_activity</td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$nbcommit</td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$nbcommitday</td>" >> $JEKYLL_SOURCE/index-commits.html
        echo "<td>$nbcommitactiveday</td></tr>" >> $JEKYLL_SOURCE/index-commits.html
    fi
}


main
