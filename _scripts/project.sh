#!/bin/bash/


contrib_stats(){
    contrib=""
    for i in {30..0}
    do
        date=$(/usr/bin/date --date="$i day ago" +%Y-%m-%d)
        contrib=$contrib"{ y: '$date', a: `/usr/bin/git shortlog --before={$date} -s | /usr/bin/wc -l` },"
        if [[ $i == 0 ]];
        then 
            contrib_maxi=`/usr/bin/git shortlog --before={$date} -s | /usr/bin/wc -l`
            echo $contrib_maxi > /srv/programmation/Ruby/sgen/_scripts/contrib/$1
            echo "$1 contrib maxi: $contrib_maxi" >> /tmp/sgen.log
        fi
        if [[ $i == 30 ]];
        then
            contrib_mini=`/usr/bin/git shortlog --before={$date} -s | /usr/bin/wc -l`
        fi
    done
}

commit_stats(){
    commit=""
    for j in {30..0}
    do
        datej=$(/usr/bin/date --date="$j day ago" +%Y-%m-%d)
        commit=$commit"{ y: '$datej', a: `/usr/bin/git log --no-merges --oneline --before={$datej} | /usr/bin/wc -l` },"
        if [[ $j == 0 ]];
        then
            commit_maxi=`/usr/bin/git log --no-merges --oneline --before={$datej} | /usr/bin/wc -l`
            echo $commit_maxi > /srv/programmation/Ruby/sgen/_scripts/commits/$1
        fi
        if [[ $j == 30 ]];
        then
            commit_mini=`/usr/bin/git log --no-merges --oneline --before={$datej} | /usr/bin/wc -l`
        fi
    done
}

tag_stats(){
    tag=`git tag`
    if [[ "$tag" != "" ]];
    then
        nbre_tag=`echo $tag | xargs -n 1 | wc -l`
        if [[ $nbre_tag -gt 1 ]];
        then
            two_last_tag=`echo $tag | xargs -n 1 | tail -n 2`
            last_tag=`echo $two_last_tag | awk '{print $2}'`
            before_last_tag=`echo $two_last_tag | awk '{print $1}'`
            last_date=`git log $last_tag --oneline --pretty=format:"%ai" | head -n 1`
            nbr_commit=`git log --no-merges --oneline $before_last_tag..$last_tag | wc -l`
            nbr_auteur=`git shortlog -s -n --no-merges --oneline $before_last_tag..$last_tag | wc -l`
        else
            last_tag=`echo $tag |xargs -n 1`
            last_date=`git log $last_tag --oneline --pretty=format:"%ai" | head -n 1`
        fi
        echo $nbre_tag", "$last_tag", "$last_date", "$nbr_commit", "$nbr_auteur > /srv/programmation/Ruby/sgen/_scripts/tags/$1
    fi
    }

echo "## Génération des fichiers Js de $1" >> /tmp/sgen.log
cd /srv/sgen/repos/$1

#project_file=$(echo $1 | awk '{print tolower($0)}')
contrib_stats $1 
commit_stats $1 
tag_stats $1
wait

echo "Ecriture du fichier $1.js" >> /tmp/sgen.log
cat << EOF > /srv/programmation/Ruby/sgen/js/sgen/$1.js
!function($) {
    "use strict";

    var Dashboard = function() {
        this.\$body = \$("body")
    };

    //initializing various charts and components
    Dashboard.prototype.init = function() {
        //Line chart
        Morris.Line({
            element: 'morris-cumul-contributeurs',
            lineWidth: 1,
            data: [
$contrib
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: $contrib_mini,
            ymax: $contrib_maxi,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
$commit
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: $commit_mini,
            ymax: $commit_maxi,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
       
},
    //init dashboard
    $.Dashboard = new Dashboard, $.Dashboard.Constructor = Dashboard
    
}(window.jQuery),

//initializing dashboad
function($) {
    "use strict";
    $.Dashboard.init()
}(window.jQuery);

EOF

