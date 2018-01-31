angular.module("module").directive("latest", function () {
    return {
        templateUrl: "latestDirective/latest.html",
        scope: {
            phone1: "=",

        }
    }
});	
myapp.controller('myCtrl1', function($scope,$rootScope, show) {

    
    show.getData($scope,0);
    $scope.text={"text-align":"center"};
    
    
   
   });
   