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
{ y: '2015-11-14', a: 8 },{ y: '2015-11-15', a: 8 },{ y: '2015-11-16', a: 8 },{ y: '2015-11-17', a: 8 },{ y: '2015-11-18', a: 8 },{ y: '2015-11-19', a: 8 },{ y: '2015-11-20', a: 8 },{ y: '2015-11-21', a: 8 },{ y: '2015-11-22', a: 8 },{ y: '2015-11-23', a: 8 },{ y: '2015-11-24', a: 8 },{ y: '2015-11-25', a: 8 },{ y: '2015-11-26', a: 8 },{ y: '2015-11-27', a: 8 },{ y: '2015-11-28', a: 8 },{ y: '2015-11-29', a: 8 },{ y: '2015-11-30', a: 8 },{ y: '2015-12-01', a: 8 },{ y: '2015-12-02', a: 8 },{ y: '2015-12-03', a: 8 },{ y: '2015-12-04', a: 8 },{ y: '2015-12-05', a: 8 },{ y: '2015-12-06', a: 8 },{ y: '2015-12-07', a: 8 },{ y: '2015-12-08', a: 8 },{ y: '2015-12-09', a: 8 },{ y: '2015-12-10', a: 8 },{ y: '2015-12-11', a: 8 },{ y: '2015-12-12', a: 8 },{ y: '2015-12-13', a: 8 },{ y: '2015-12-14', a: 8 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 8,
            ymax: 8,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-11-14', a: 412 },{ y: '2015-11-15', a: 414 },{ y: '2015-11-16', a: 414 },{ y: '2015-11-17', a: 414 },{ y: '2015-11-18', a: 414 },{ y: '2015-11-19', a: 417 },{ y: '2015-11-20', a: 423 },{ y: '2015-11-21', a: 433 },{ y: '2015-11-22', a: 433 },{ y: '2015-11-23', a: 435 },{ y: '2015-11-24', a: 435 },{ y: '2015-11-25', a: 436 },{ y: '2015-11-26', a: 436 },{ y: '2015-11-27', a: 436 },{ y: '2015-11-28', a: 436 },{ y: '2015-11-29', a: 436 },{ y: '2015-11-30', a: 436 },{ y: '2015-12-01', a: 436 },{ y: '2015-12-02', a: 436 },{ y: '2015-12-03', a: 436 },{ y: '2015-12-04', a: 436 },{ y: '2015-12-05', a: 436 },{ y: '2015-12-06', a: 438 },{ y: '2015-12-07', a: 438 },{ y: '2015-12-08', a: 444 },{ y: '2015-12-09', a: 444 },{ y: '2015-12-10', a: 444 },{ y: '2015-12-11', a: 444 },{ y: '2015-12-12', a: 444 },{ y: '2015-12-13', a: 444 },{ y: '2015-12-14', a: 444 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 412,
            ymax: 444,
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

