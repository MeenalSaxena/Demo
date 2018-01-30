angular.module("mymodule").directive("budget", function () {
    return {
        templateUrl: "budgetDirective/budget.html",
        controller:function($scope){
            $scope.my="I can DO";
        },
        scope: {
            phone2: "=",

        }
    }
});
myapp.controller("controlbudget", function ($scope, $http) {
    $http.get("http://localhost/2/Product%20Project/js/Mobiles.json").then(function (responseData) {
        $scope.msg1 = responseData.data;
      $scope.hello="i am working";
        (function (a) {
            var final = []; var temp = []; var i;

            for (i = 0; i < a.length; i++) {
                if ((i % 3 == 0 && i > 0) || (i == a.length - 1)) {

                    final.push(temp);
                    temp = [];

                }
                temp.push(a[i]);

            }
            $scope.msg1 = final;
            console.log($scope.msg1);
        })($scope.msg1);
    });
    $scope.imagestyle = { "width": "33%", "height": "170px" } ;

});
