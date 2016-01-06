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
{ y: '2015-12-02', a: 6 },{ y: '2015-12-03', a: 6 },{ y: '2015-12-04', a: 6 },{ y: '2015-12-05', a: 6 },{ y: '2015-12-06', a: 6 },{ y: '2015-12-07', a: 6 },{ y: '2015-12-08', a: 6 },{ y: '2015-12-09', a: 6 },{ y: '2015-12-10', a: 6 },{ y: '2015-12-11', a: 6 },{ y: '2015-12-12', a: 6 },{ y: '2015-12-13', a: 6 },{ y: '2015-12-14', a: 6 },{ y: '2015-12-15', a: 6 },{ y: '2015-12-16', a: 6 },{ y: '2015-12-17', a: 6 },{ y: '2015-12-18', a: 6 },{ y: '2015-12-19', a: 6 },{ y: '2015-12-20', a: 6 },{ y: '2015-12-21', a: 6 },{ y: '2015-12-22', a: 7 },{ y: '2015-12-23', a: 7 },{ y: '2015-12-24', a: 7 },{ y: '2015-12-25', a: 7 },{ y: '2015-12-26', a: 7 },{ y: '2015-12-27', a: 7 },{ y: '2015-12-28', a: 7 },{ y: '2015-12-29', a: 7 },{ y: '2015-12-30', a: 7 },{ y: '2015-12-31', a: 7 },{ y: '2016-01-01', a: 7 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 6,
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
{ y: '2015-12-02', a: 104 },{ y: '2015-12-03', a: 104 },{ y: '2015-12-04', a: 104 },{ y: '2015-12-05', a: 104 },{ y: '2015-12-06', a: 104 },{ y: '2015-12-07', a: 104 },{ y: '2015-12-08', a: 104 },{ y: '2015-12-09', a: 104 },{ y: '2015-12-10', a: 104 },{ y: '2015-12-11', a: 104 },{ y: '2015-12-12', a: 104 },{ y: '2015-12-13', a: 104 },{ y: '2015-12-14', a: 104 },{ y: '2015-12-15', a: 104 },{ y: '2015-12-16', a: 104 },{ y: '2015-12-17', a: 104 },{ y: '2015-12-18', a: 104 },{ y: '2015-12-19', a: 104 },{ y: '2015-12-20', a: 104 },{ y: '2015-12-21', a: 104 },{ y: '2015-12-22', a: 105 },{ y: '2015-12-23', a: 108 },{ y: '2015-12-24', a: 108 },{ y: '2015-12-25', a: 108 },{ y: '2015-12-26', a: 108 },{ y: '2015-12-27', a: 108 },{ y: '2015-12-28', a: 108 },{ y: '2015-12-29', a: 108 },{ y: '2015-12-30', a: 108 },{ y: '2015-12-31', a: 108 },{ y: '2016-01-01', a: 108 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 104,
            ymax: 108,
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

