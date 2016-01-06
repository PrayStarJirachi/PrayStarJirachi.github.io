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
{ y: '2015-11-14', a: 3 },{ y: '2015-11-15', a: 3 },{ y: '2015-11-16', a: 3 },{ y: '2015-11-17', a: 3 },{ y: '2015-11-18', a: 3 },{ y: '2015-11-19', a: 3 },{ y: '2015-11-20', a: 3 },{ y: '2015-11-21', a: 3 },{ y: '2015-11-22', a: 3 },{ y: '2015-11-23', a: 3 },{ y: '2015-11-24', a: 3 },{ y: '2015-11-25', a: 3 },{ y: '2015-11-26', a: 3 },{ y: '2015-11-27', a: 3 },{ y: '2015-11-28', a: 3 },{ y: '2015-11-29', a: 3 },{ y: '2015-11-30', a: 3 },{ y: '2015-12-01', a: 3 },{ y: '2015-12-02', a: 3 },{ y: '2015-12-03', a: 3 },{ y: '2015-12-04', a: 3 },{ y: '2015-12-05', a: 3 },{ y: '2015-12-06', a: 3 },{ y: '2015-12-07', a: 3 },{ y: '2015-12-08', a: 3 },{ y: '2015-12-09', a: 3 },{ y: '2015-12-10', a: 3 },{ y: '2015-12-11', a: 3 },{ y: '2015-12-12', a: 3 },{ y: '2015-12-13', a: 3 },{ y: '2015-12-14', a: 3 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 3,
            ymax: 3,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-11-14', a: 44 },{ y: '2015-11-15', a: 44 },{ y: '2015-11-16', a: 44 },{ y: '2015-11-17', a: 44 },{ y: '2015-11-18', a: 44 },{ y: '2015-11-19', a: 44 },{ y: '2015-11-20', a: 44 },{ y: '2015-11-21', a: 44 },{ y: '2015-11-22', a: 44 },{ y: '2015-11-23', a: 44 },{ y: '2015-11-24', a: 44 },{ y: '2015-11-25', a: 44 },{ y: '2015-11-26', a: 44 },{ y: '2015-11-27', a: 44 },{ y: '2015-11-28', a: 44 },{ y: '2015-11-29', a: 44 },{ y: '2015-11-30', a: 44 },{ y: '2015-12-01', a: 44 },{ y: '2015-12-02', a: 44 },{ y: '2015-12-03', a: 44 },{ y: '2015-12-04', a: 44 },{ y: '2015-12-05', a: 44 },{ y: '2015-12-06', a: 44 },{ y: '2015-12-07', a: 44 },{ y: '2015-12-08', a: 44 },{ y: '2015-12-09', a: 44 },{ y: '2015-12-10', a: 44 },{ y: '2015-12-11', a: 44 },{ y: '2015-12-12', a: 44 },{ y: '2015-12-13', a: 44 },{ y: '2015-12-14', a: 44 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 44,
            ymax: 44,
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

