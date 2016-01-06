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
{ y: '2015-11-14', a: 1 },{ y: '2015-11-15', a: 1 },{ y: '2015-11-16', a: 1 },{ y: '2015-11-17', a: 1 },{ y: '2015-11-18', a: 1 },{ y: '2015-11-19', a: 1 },{ y: '2015-11-20', a: 1 },{ y: '2015-11-21', a: 1 },{ y: '2015-11-22', a: 1 },{ y: '2015-11-23', a: 1 },{ y: '2015-11-24', a: 1 },{ y: '2015-11-25', a: 1 },{ y: '2015-11-26', a: 1 },{ y: '2015-11-27', a: 1 },{ y: '2015-11-28', a: 1 },{ y: '2015-11-29', a: 1 },{ y: '2015-11-30', a: 1 },{ y: '2015-12-01', a: 1 },{ y: '2015-12-02', a: 1 },{ y: '2015-12-03', a: 1 },{ y: '2015-12-04', a: 1 },{ y: '2015-12-05', a: 1 },{ y: '2015-12-06', a: 1 },{ y: '2015-12-07', a: 1 },{ y: '2015-12-08', a: 1 },{ y: '2015-12-09', a: 1 },{ y: '2015-12-10', a: 1 },{ y: '2015-12-11', a: 1 },{ y: '2015-12-12', a: 1 },{ y: '2015-12-13', a: 1 },{ y: '2015-12-14', a: 1 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 1,
            ymax: 1,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-11-14', a: 47 },{ y: '2015-11-15', a: 47 },{ y: '2015-11-16', a: 47 },{ y: '2015-11-17', a: 47 },{ y: '2015-11-18', a: 47 },{ y: '2015-11-19', a: 47 },{ y: '2015-11-20', a: 47 },{ y: '2015-11-21', a: 47 },{ y: '2015-11-22', a: 47 },{ y: '2015-11-23', a: 47 },{ y: '2015-11-24', a: 47 },{ y: '2015-11-25', a: 47 },{ y: '2015-11-26', a: 47 },{ y: '2015-11-27', a: 47 },{ y: '2015-11-28', a: 47 },{ y: '2015-11-29', a: 47 },{ y: '2015-11-30', a: 47 },{ y: '2015-12-01', a: 47 },{ y: '2015-12-02', a: 47 },{ y: '2015-12-03', a: 47 },{ y: '2015-12-04', a: 47 },{ y: '2015-12-05', a: 47 },{ y: '2015-12-06', a: 47 },{ y: '2015-12-07', a: 47 },{ y: '2015-12-08', a: 47 },{ y: '2015-12-09', a: 47 },{ y: '2015-12-10', a: 47 },{ y: '2015-12-11', a: 47 },{ y: '2015-12-12', a: 47 },{ y: '2015-12-13', a: 47 },{ y: '2015-12-14', a: 47 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 47,
            ymax: 47,
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

