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
{ y: '2015-12-02', a: 2 },{ y: '2015-12-03', a: 2 },{ y: '2015-12-04', a: 2 },{ y: '2015-12-05', a: 2 },{ y: '2015-12-06', a: 2 },{ y: '2015-12-07', a: 2 },{ y: '2015-12-08', a: 2 },{ y: '2015-12-09', a: 2 },{ y: '2015-12-10', a: 2 },{ y: '2015-12-11', a: 2 },{ y: '2015-12-12', a: 2 },{ y: '2015-12-13', a: 2 },{ y: '2015-12-14', a: 2 },{ y: '2015-12-15', a: 2 },{ y: '2015-12-16', a: 2 },{ y: '2015-12-17', a: 2 },{ y: '2015-12-18', a: 2 },{ y: '2015-12-19', a: 2 },{ y: '2015-12-20', a: 2 },{ y: '2015-12-21', a: 2 },{ y: '2015-12-22', a: 2 },{ y: '2015-12-23', a: 2 },{ y: '2015-12-24', a: 2 },{ y: '2015-12-25', a: 2 },{ y: '2015-12-26', a: 2 },{ y: '2015-12-27', a: 2 },{ y: '2015-12-28', a: 2 },{ y: '2015-12-29', a: 2 },{ y: '2015-12-30', a: 2 },{ y: '2015-12-31', a: 2 },{ y: '2016-01-01', a: 2 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 2,
            ymax: 2,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-12-02', a: 208 },{ y: '2015-12-03', a: 208 },{ y: '2015-12-04', a: 208 },{ y: '2015-12-05', a: 208 },{ y: '2015-12-06', a: 208 },{ y: '2015-12-07', a: 208 },{ y: '2015-12-08', a: 208 },{ y: '2015-12-09', a: 208 },{ y: '2015-12-10', a: 208 },{ y: '2015-12-11', a: 208 },{ y: '2015-12-12', a: 224 },{ y: '2015-12-13', a: 224 },{ y: '2015-12-14', a: 224 },{ y: '2015-12-15', a: 224 },{ y: '2015-12-16', a: 224 },{ y: '2015-12-17', a: 224 },{ y: '2015-12-18', a: 224 },{ y: '2015-12-19', a: 224 },{ y: '2015-12-20', a: 224 },{ y: '2015-12-21', a: 224 },{ y: '2015-12-22', a: 224 },{ y: '2015-12-23', a: 233 },{ y: '2015-12-24', a: 234 },{ y: '2015-12-25', a: 235 },{ y: '2015-12-26', a: 251 },{ y: '2015-12-27', a: 260 },{ y: '2015-12-28', a: 261 },{ y: '2015-12-29', a: 261 },{ y: '2015-12-30', a: 261 },{ y: '2015-12-31', a: 261 },{ y: '2016-01-01', a: 261 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 208,
            ymax: 261,
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

