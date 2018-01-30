angular.module("mymodule").directive("budget", function () {
    return {
        templateUrl: "budgetDirective/budget.html",
       
        scope: {
            phone2: "=",

        }
    }
});




