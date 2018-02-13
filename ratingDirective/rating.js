angular.module("module").directive("rating", function () {
    return {
        templateUrl: "ratingDirective/rating.html",
       
        
    }
});


myapp.controller('ratingController', function($scope,$rootScope, show) {

    
    show.getData($scope,3);
    
    
    //$scope.text = { "text-align":"center"};
   
   });
   



