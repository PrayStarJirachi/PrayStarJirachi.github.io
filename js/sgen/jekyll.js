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
{ y: '2015-12-04', a: 571 },{ y: '2015-12-05', a: 571 },{ y: '2015-12-06', a: 571 },{ y: '2015-12-07', a: 571 },{ y: '2015-12-08', a: 572 },{ y: '2015-12-09', a: 572 },{ y: '2015-12-10', a: 573 },{ y: '2015-12-11', a: 575 },{ y: '2015-12-12', a: 575 },{ y: '2015-12-13', a: 576 },{ y: '2015-12-14', a: 577 },{ y: '2015-12-15', a: 577 },{ y: '2015-12-16', a: 577 },{ y: '2015-12-17', a: 578 },{ y: '2015-12-18', a: 578 },{ y: '2015-12-19', a: 578 },{ y: '2015-12-20', a: 579 },{ y: '2015-12-21', a: 579 },{ y: '2015-12-22', a: 580 },{ y: '2015-12-23', a: 580 },{ y: '2015-12-24', a: 580 },{ y: '2015-12-25', a: 580 },{ y: '2015-12-26', a: 580 },{ y: '2015-12-27', a: 582 },{ y: '2015-12-28', a: 582 },{ y: '2015-12-29', a: 582 },{ y: '2015-12-30', a: 582 },{ y: '2015-12-31', a: 582 },{ y: '2016-01-01', a: 582 },{ y: '2016-01-02', a: 582 },{ y: '2016-01-03', a: 582 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 571,
            ymax: 582,
            smooth: false,
            labels: ['Series A'],
            resize: true,
            lineColors: ['#2f353f']
        });
        Morris.Line({
            element: 'morris-nombre-commits',
            lineWidth: 1,
            data: [
{ y: '2015-12-04', a: 4914 },{ y: '2015-12-05', a: 4930 },{ y: '2015-12-06', a: 4932 },{ y: '2015-12-07', a: 4933 },{ y: '2015-12-08', a: 4936 },{ y: '2015-12-09', a: 4937 },{ y: '2015-12-10', a: 4941 },{ y: '2015-12-11', a: 4946 },{ y: '2015-12-12', a: 4949 },{ y: '2015-12-13', a: 4950 },{ y: '2015-12-14', a: 4954 },{ y: '2015-12-15', a: 4956 },{ y: '2015-12-16', a: 4957 },{ y: '2015-12-17', a: 4958 },{ y: '2015-12-18', a: 4958 },{ y: '2015-12-19', a: 4959 },{ y: '2015-12-20', a: 4960 },{ y: '2015-12-21', a: 4960 },{ y: '2015-12-22', a: 4964 },{ y: '2015-12-23', a: 4976 },{ y: '2015-12-24', a: 4976 },{ y: '2015-12-25', a: 4981 },{ y: '2015-12-26', a: 4984 },{ y: '2015-12-27', a: 4998 },{ y: '2015-12-28', a: 5007 },{ y: '2015-12-29', a: 5007 },{ y: '2015-12-30', a: 5008 },{ y: '2015-12-31', a: 5010 },{ y: '2016-01-01', a: 5010 },{ y: '2016-01-02', a: 5010 },{ y: '2016-01-03', a: 5010 },
],
            xkey: 'y',
            ykeys: ['a'],
            ymin: 4914,
            ymax: 5010,
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

