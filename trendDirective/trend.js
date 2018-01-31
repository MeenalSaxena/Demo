angular.module("module").directive("trend", function () {
    return {
        templateUrl: "trendDirective/trend.html",
        scope: {
            phone3: "=",

        }
    }
});


myapp.controller('myCtrl3', function($scope,$rootScope, show) {

    
    show.getData($scope,2);
    
    
    $scope.text = { "text-align":"center"};


   
   });
   