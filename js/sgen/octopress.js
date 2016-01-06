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
{ y: '2015-12-02', a: 135 },{ y: '2015-12-03', a: 135 },{ y: '2015-12-04', a: 135 },{ y: '2015-12-05', a: 135 },{ y: '2015-12-06', a: 135 },{ y: '2015-12-07', a: 135 },{ y: '2015-12-08', a: 135 },{ y: '2015-12-09', a: 135 },{ y: '2015-12-10', a: 135 },{ y: '2015-12-11', a: 135 },{ y: '2015-12-12', a: 135 },{ y: '2015-12-13', a: 135 },{ y: '2015-12-14', a: 135 },{ y: '2015-12-15', a: 135 },{ y: '2015-12-16', a: 135 },{ y: '2015-12-17', a: 135 },{ y: '2015-12-18', a: 135 },{ y: '2015-12-19', a: 135 },{ y: '2015-12-20', a: 135 },{ y: '2015-12-21', a: 135 },{ y: '2015-12-22', a: 135 },{ y: '2015-12-23', a: 135 },{ y: '2015-12-24', a: 135 },{ y: '2015-12-25', a: 135 },{ y: '2015-12-26', a: 135 },{ y: '2015-12-27', a: 135 },{ y: '2015-12-28', a: 135 },{ y: '2015-12-29', a: 135 },{ y: '2015-12-30', a: 135 },{ y: '2015-12-31', a: 135 },{ y: '2016-01-01', a: 135 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 135,
            ymax: 135,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-12-02', a: 691 },{ y: '2015-12-03', a: 691 },{ y: '2015-12-04', a: 691 },{ y: '2015-12-05', a: 691 },{ y: '2015-12-06', a: 691 },{ y: '2015-12-07', a: 691 },{ y: '2015-12-08', a: 691 },{ y: '2015-12-09', a: 691 },{ y: '2015-12-10', a: 691 },{ y: '2015-12-11', a: 691 },{ y: '2015-12-12', a: 691 },{ y: '2015-12-13', a: 691 },{ y: '2015-12-14', a: 691 },{ y: '2015-12-15', a: 691 },{ y: '2015-12-16', a: 691 },{ y: '2015-12-17', a: 691 },{ y: '2015-12-18', a: 691 },{ y: '2015-12-19', a: 691 },{ y: '2015-12-20', a: 691 },{ y: '2015-12-21', a: 691 },{ y: '2015-12-22', a: 691 },{ y: '2015-12-23', a: 691 },{ y: '2015-12-24', a: 691 },{ y: '2015-12-25', a: 691 },{ y: '2015-12-26', a: 691 },{ y: '2015-12-27', a: 691 },{ y: '2015-12-28', a: 691 },{ y: '2015-12-29', a: 691 },{ y: '2015-12-30', a: 691 },{ y: '2015-12-31', a: 691 },{ y: '2016-01-01', a: 691 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 691,
            ymax: 691,
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

