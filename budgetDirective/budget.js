angular.module("module").directive("budget", function () {
    return {
        templateUrl: "budgetDirective/budget.html",
       
        
    }
});


myapp.controller('myCtrl2', function($scope,$rootScope, show) {

    
    show.getData($scope,1);
    
    
    $scope.text = { "text-align":"center"};
   
   });
   

