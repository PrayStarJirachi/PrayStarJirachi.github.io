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
{ y: '2015-12-02', a: 3 },{ y: '2015-12-03', a: 3 },{ y: '2015-12-04', a: 3 },{ y: '2015-12-05', a: 3 },{ y: '2015-12-06', a: 3 },{ y: '2015-12-07', a: 3 },{ y: '2015-12-08', a: 3 },{ y: '2015-12-09', a: 3 },{ y: '2015-12-10', a: 3 },{ y: '2015-12-11', a: 3 },{ y: '2015-12-12', a: 3 },{ y: '2015-12-13', a: 3 },{ y: '2015-12-14', a: 3 },{ y: '2015-12-15', a: 3 },{ y: '2015-12-16', a: 3 },{ y: '2015-12-17', a: 3 },{ y: '2015-12-18', a: 3 },{ y: '2015-12-19', a: 3 },{ y: '2015-12-20', a: 3 },{ y: '2015-12-21', a: 3 },{ y: '2015-12-22', a: 3 },{ y: '2015-12-23', a: 3 },{ y: '2015-12-24', a: 3 },{ y: '2015-12-25', a: 3 },{ y: '2015-12-26', a: 3 },{ y: '2015-12-27', a: 3 },{ y: '2015-12-28', a: 3 },{ y: '2015-12-29', a: 3 },{ y: '2015-12-30', a: 3 },{ y: '2015-12-31', a: 3 },{ y: '2016-01-01', a: 3 },
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
{ y: '2015-12-02', a: 420 },{ y: '2015-12-03', a: 420 },{ y: '2015-12-04', a: 420 },{ y: '2015-12-05', a: 420 },{ y: '2015-12-06', a: 420 },{ y: '2015-12-07', a: 420 },{ y: '2015-12-08', a: 420 },{ y: '2015-12-09', a: 420 },{ y: '2015-12-10', a: 420 },{ y: '2015-12-11', a: 420 },{ y: '2015-12-12', a: 420 },{ y: '2015-12-13', a: 420 },{ y: '2015-12-14', a: 420 },{ y: '2015-12-15', a: 420 },{ y: '2015-12-16', a: 420 },{ y: '2015-12-17', a: 420 },{ y: '2015-12-18', a: 420 },{ y: '2015-12-19', a: 420 },{ y: '2015-12-20', a: 420 },{ y: '2015-12-21', a: 420 },{ y: '2015-12-22', a: 420 },{ y: '2015-12-23', a: 420 },{ y: '2015-12-24', a: 420 },{ y: '2015-12-25', a: 420 },{ y: '2015-12-26', a: 420 },{ y: '2015-12-27', a: 420 },{ y: '2015-12-28', a: 420 },{ y: '2015-12-29', a: 420 },{ y: '2015-12-30', a: 420 },{ y: '2015-12-31', a: 420 },{ y: '2016-01-01', a: 420 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 420,
            ymax: 420,
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

