NinjaApp.directive("randomNinja",function(){
    return{
        restrict:"E",
        scope:{
            ninjas:"=",
            title:"="
        },
        template:'<img ng-src="{{ninjas[random].tumb}}">',
        controller: function($scope){
             $scope.random= Math.floor(Math.random() *4);
        
    },
        
        
    }
})