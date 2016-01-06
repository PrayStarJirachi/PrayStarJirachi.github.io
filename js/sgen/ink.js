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
{ y: '2015-12-02', a: 5 },{ y: '2015-12-03', a: 5 },{ y: '2015-12-04', a: 5 },{ y: '2015-12-05', a: 5 },{ y: '2015-12-06', a: 5 },{ y: '2015-12-07', a: 5 },{ y: '2015-12-08', a: 5 },{ y: '2015-12-09', a: 5 },{ y: '2015-12-10', a: 5 },{ y: '2015-12-11', a: 5 },{ y: '2015-12-12', a: 5 },{ y: '2015-12-13', a: 5 },{ y: '2015-12-14', a: 5 },{ y: '2015-12-15', a: 5 },{ y: '2015-12-16', a: 5 },{ y: '2015-12-17', a: 5 },{ y: '2015-12-18', a: 5 },{ y: '2015-12-19', a: 5 },{ y: '2015-12-20', a: 5 },{ y: '2015-12-21', a: 5 },{ y: '2015-12-22', a: 5 },{ y: '2015-12-23', a: 5 },{ y: '2015-12-24', a: 6 },{ y: '2015-12-25', a: 6 },{ y: '2015-12-26', a: 6 },{ y: '2015-12-27', a: 6 },{ y: '2015-12-28', a: 6 },{ y: '2015-12-29', a: 6 },{ y: '2015-12-30', a: 6 },{ y: '2015-12-31', a: 6 },{ y: '2016-01-01', a: 6 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 5,
            ymax: 6,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-12-02', a: 58 },{ y: '2015-12-03', a: 60 },{ y: '2015-12-04', a: 63 },{ y: '2015-12-05', a: 63 },{ y: '2015-12-06', a: 63 },{ y: '2015-12-07', a: 64 },{ y: '2015-12-08', a: 65 },{ y: '2015-12-09', a: 65 },{ y: '2015-12-10', a: 66 },{ y: '2015-12-11', a: 66 },{ y: '2015-12-12', a: 66 },{ y: '2015-12-13', a: 66 },{ y: '2015-12-14', a: 68 },{ y: '2015-12-15', a: 70 },{ y: '2015-12-16', a: 71 },{ y: '2015-12-17', a: 71 },{ y: '2015-12-18', a: 72 },{ y: '2015-12-19', a: 72 },{ y: '2015-12-20', a: 73 },{ y: '2015-12-21', a: 76 },{ y: '2015-12-22', a: 77 },{ y: '2015-12-23', a: 77 },{ y: '2015-12-24', a: 79 },{ y: '2015-12-25', a: 85 },{ y: '2015-12-26', a: 85 },{ y: '2015-12-27', a: 85 },{ y: '2015-12-28', a: 86 },{ y: '2015-12-29', a: 86 },{ y: '2015-12-30', a: 86 },{ y: '2015-12-31', a: 86 },{ y: '2016-01-01', a: 86 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 58,
            ymax: 86,
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

