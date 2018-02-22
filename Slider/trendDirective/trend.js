angular.module("mymodule").directive("trend", function () {
    return {
        templateUrl: "trendDirective/trend.html",
        scope: {
            phone3: "=",

        }
    }
});


