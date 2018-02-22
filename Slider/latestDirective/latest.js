angular.module("mymodule").directive("latest", function () {
    return {
        templateUrl: "latestDirective/latest.html",
        scope: {
            phone1: "=",

        }
    }
});	
