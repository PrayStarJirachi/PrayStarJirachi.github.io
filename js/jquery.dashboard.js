!function($) {
    "use strict";

    var Dashboard = function() {
        this.$body = $("body")
    };

    //initializing various charts and components
    Dashboard.prototype.init = function() {
        //Line chart
        Morris.Area({
            element: 'morris-bar-example',
            lineWidth: 0,
            data: [
                { y: '2015-12-01', a: 10 },
                { y: '2015-12-02', a: 75 },
                { y: '2015-12-03', a: 50 },
                { y: '2015-12-04', a: 75 },
                { y: '2015-12-05', a: 50 },
                { y: '2015-12-06', a: 75 },
                { y: '2015-12-07', a: 90 }
            ],
            xkey: 'y',
            ykeys: ['a'],
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



