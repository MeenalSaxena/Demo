angular.module("module").directive("side", function () {
    return {
        templateUrl: "sideDirective/side.html",
       
        
    }
});



myapp.controller('sideController', function($scope,$rootScope, show) {

    
    show.getData($scope,3);
    
    
    //$scope.text = { "text-align":"center"};
   
   });
   

