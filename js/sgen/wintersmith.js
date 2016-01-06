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
{ y: '2015-12-04', a: 39 },{ y: '2015-12-05', a: 39 },{ y: '2015-12-06', a: 39 },{ y: '2015-12-07', a: 39 },{ y: '2015-12-08', a: 39 },{ y: '2015-12-09', a: 39 },{ y: '2015-12-10', a: 39 },{ y: '2015-12-11', a: 39 },{ y: '2015-12-12', a: 39 },{ y: '2015-12-13', a: 40 },{ y: '2015-12-14', a: 40 },{ y: '2015-12-15', a: 40 },{ y: '2015-12-16', a: 40 },{ y: '2015-12-17', a: 40 },{ y: '2015-12-18', a: 40 },{ y: '2015-12-19', a: 40 },{ y: '2015-12-20', a: 40 },{ y: '2015-12-21', a: 40 },{ y: '2015-12-22', a: 40 },{ y: '2015-12-23', a: 40 },{ y: '2015-12-24', a: 40 },{ y: '2015-12-25', a: 40 },{ y: '2015-12-26', a: 40 },{ y: '2015-12-27', a: 40 },{ y: '2015-12-28', a: 40 },{ y: '2015-12-29', a: 40 },{ y: '2015-12-30', a: 40 },{ y: '2015-12-31', a: 40 },{ y: '2016-01-01', a: 40 },{ y: '2016-01-02', a: 40 },{ y: '2016-01-03', a: 40 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 39,
            ymax: 40,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-12-04', a: 348 },{ y: '2015-12-05', a: 348 },{ y: '2015-12-06', a: 348 },{ y: '2015-12-07', a: 348 },{ y: '2015-12-08', a: 348 },{ y: '2015-12-09', a: 348 },{ y: '2015-12-10', a: 348 },{ y: '2015-12-11', a: 348 },{ y: '2015-12-12', a: 348 },{ y: '2015-12-13', a: 349 },{ y: '2015-12-14', a: 349 },{ y: '2015-12-15', a: 349 },{ y: '2015-12-16', a: 349 },{ y: '2015-12-17', a: 349 },{ y: '2015-12-18', a: 349 },{ y: '2015-12-19', a: 349 },{ y: '2015-12-20', a: 349 },{ y: '2015-12-21', a: 349 },{ y: '2015-12-22', a: 349 },{ y: '2015-12-23', a: 349 },{ y: '2015-12-24', a: 349 },{ y: '2015-12-25', a: 349 },{ y: '2015-12-26', a: 349 },{ y: '2015-12-27', a: 349 },{ y: '2015-12-28', a: 349 },{ y: '2015-12-29', a: 349 },{ y: '2015-12-30', a: 349 },{ y: '2015-12-31', a: 349 },{ y: '2016-01-01', a: 349 },{ y: '2016-01-02', a: 349 },{ y: '2016-01-03', a: 353 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 348,
            ymax: 353,
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

