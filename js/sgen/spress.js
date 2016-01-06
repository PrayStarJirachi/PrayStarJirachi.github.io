!function($) {
    "use strict";

    var Dashboard = function() {
        this.$body = $("body")
    };

    //initializing various charts and components
    Dashboard.prototype.init = function() {
        //Line chart
        Morris.Line({
            element: 'morris-cumul-contributeurs',
            lineWidth: 1,
            data: [
{ y: '2015-11-14', a: 7 },{ y: '2015-11-15', a: 7 },{ y: '2015-11-16', a: 7 },{ y: '2015-11-17', a: 7 },{ y: '2015-11-18', a: 7 },{ y: '2015-11-19', a: 7 },{ y: '2015-11-20', a: 7 },{ y: '2015-11-21', a: 7 },{ y: '2015-11-22', a: 7 },{ y: '2015-11-23', a: 7 },{ y: '2015-11-24', a: 7 },{ y: '2015-11-25', a: 7 },{ y: '2015-11-26', a: 7 },{ y: '2015-11-27', a: 7 },{ y: '2015-11-28', a: 7 },{ y: '2015-11-29', a: 7 },{ y: '2015-11-30', a: 7 },{ y: '2015-12-01', a: 7 },{ y: '2015-12-02', a: 7 },{ y: '2015-12-03', a: 7 },{ y: '2015-12-04', a: 7 },{ y: '2015-12-05', a: 7 },{ y: '2015-12-06', a: 7 },{ y: '2015-12-07', a: 7 },{ y: '2015-12-08', a: 7 },{ y: '2015-12-09', a: 7 },{ y: '2015-12-10', a: 7 },{ y: '2015-12-11', a: 7 },{ y: '2015-12-12', a: 7 },{ y: '2015-12-13', a: 7 },{ y: '2015-12-14', a: 7 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 7,
            ymax: 7,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-11-14', a: 781 },{ y: '2015-11-15', a: 782 },{ y: '2015-11-16', a: 782 },{ y: '2015-11-17', a: 785 },{ y: '2015-11-18', a: 787 },{ y: '2015-11-19', a: 787 },{ y: '2015-11-20', a: 787 },{ y: '2015-11-21', a: 789 },{ y: '2015-11-22', a: 789 },{ y: '2015-11-23', a: 789 },{ y: '2015-11-24', a: 790 },{ y: '2015-11-25', a: 790 },{ y: '2015-11-26', a: 790 },{ y: '2015-11-27', a: 790 },{ y: '2015-11-28', a: 790 },{ y: '2015-11-29', a: 791 },{ y: '2015-11-30', a: 791 },{ y: '2015-12-01', a: 794 },{ y: '2015-12-02', a: 795 },{ y: '2015-12-03', a: 796 },{ y: '2015-12-04', a: 799 },{ y: '2015-12-05', a: 800 },{ y: '2015-12-06', a: 801 },{ y: '2015-12-07', a: 801 },{ y: '2015-12-08', a: 802 },{ y: '2015-12-09', a: 802 },{ y: '2015-12-10', a: 803 },{ y: '2015-12-11', a: 804 },{ y: '2015-12-12', a: 804 },{ y: '2015-12-13', a: 804 },{ y: '2015-12-14', a: 804 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 781,
            ymax: 804,
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

