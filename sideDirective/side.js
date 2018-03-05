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
    $scope.item7=[];
    
    $scope.getValue=function(){
        var arr1=[],arr2=[],arr3=[],arr4=[],arr5=[],arr6=[];
        var arr7=[];
        
        for(var i=0;i<$scope.item1.length;i++)
        {
            if($scope.item1[i].isSelected){
                arr1.push($scope.item1[i].name);
            }
        }

        for(var i=0;i<$scope.item2.length;i++)
        {
            if($scope.item2[i].isSelected){
                arr2.push($scope.item2[i].rate);
            }

            if($scope.item3[i].isSelected){
                arr3.push($scope.item3[i].camera);
            }
            
            if($scope.item4[i].isSelected){
                arr4.push($scope.item4[i].battery);
            }
            

            if($scope.item5[i].isSelected){
                arr5.push($scope.item5[i].ram);
            }
            if($scope.item6[i].isSelected){
                arr6.push($scope.item6[i].review);
            }
            if($scope.item7[i].isSelected){
                arr7.push($scope.item7[i].memory);
            }
          

            
        }
        
        
        console.log("http://movieztalk.com/product/search?brands=["+arr1+"]&categories={Overall:["+arr2+"],Camera:["+arr3+"],Battery:["+arr4+"],Ram:["+arr5+"],Memory/Storage:["+arr7+"],userReviewCouns:["+arr6+"]}&searchQuery=test");

       
    }
    
    //$scope.text = { "text-align":"center"};
   
   });
   

