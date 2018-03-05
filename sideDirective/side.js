angular.module("module").directive("side", function () {
    return {
        templateUrl: "sideDirective/side.html",
       
        
    }
});



myapp.controller('sideController', function($scope,$rootScope, show) {

    
    show.getData($scope,3);
    $scope.item1=[];
    $scope.item2=[];
    $scope.item3=[];
    $scope.item4=[];
    $scope.item5=[];
    $scope.item6=[];
    
    $scope.getValue=function(){
        var arr=[];
        
        for(var i=0;i<$scope.item1.length;i++)
        {
            if($scope.item1[i].isSelected){
                arr.push("Name:--"+$scope.item1[i].name);
            }
        }

        for(var i=0;i<$scope.item2.length;i++)
        {
            if($scope.item2[i].isSelected){
                arr.push("Rating:--"+$scope.item2[i].rate);
            }

            if($scope.item3[i].isSelected){
                arr.push("Camera:--"+$scope.item3[i].camera);
            }
            
            if($scope.item4[i].isSelected){
                arr.push("Battery:--"+$scope.item4[i].battery);
            }
            

            if($scope.item5[i].isSelected){
                arr.push("Ram:--"+$scope.item5[i].ram);
            }
            if($scope.item6[i].isSelected){
                arr.push("Review:--"+$scope.item6[i].review);
            }

            
            
        }

        console.log(arr);
       
    }
    
    //$scope.text = { "text-align":"center"};
   
   });
   

