var myapp=angular.module("module",[]);

var answer;

 myapp.service("show", function($http){
    var that = this;
    that.allData;
    that.latestData;
    that.getData=function(scp,i)
    {
        if(!that.allData)
        {
        $http.get("https://www.getpostman.com/collections/df20bf44ab5ad34a9fac").then(function(x){
    //that.myfun(x);
            that.allData=x;
            
            $http.get(x.data.requests[i].url).then(function(xx){scp.urlLatest=xx.data;that.latestData=xx.data; console.log(that.latestData)})
            
 });
    }
    else{
        x=that.allData;   
        
            $http.get(x.data.requests[i].url).then(function(xx){scp.urlLatest=xx.data;that.latestData=xx.data}
            
        )
            
            
    }
      
}

    


});