NinjaApp = angular.module("ninja",["ngRoute", "ngAnimate"]);

NinjaApp.controller("NinjaController", ["$scope", "$http", function($scope, $http)
{
      
    $http.get("data/Ninja.json").then(function(response){
                     $scope.Ninjas=response.data.ninjas;
                                        });
    $scope.title="Home Page";
    
    $scope.OrderByMe = function(x){
                    $scope.myOrder = x;
                };

    $scope.RemoveNinja =function(Ninja){
        var remove = $scope.Ninjas.indexOf(Ninja)
        $scope.Ninjas.splice(remove,1);
        
    }
    
    $scope.AddNinja= function()
    {
        $scope.Ninjas.push({
            name:$scope.newNinja.name,
            belt:$scope.newNinja.belt,
            rate:parseInt($scope.newNinja.rate)
        });
        
            $scope.newNinja.name="";
            $scope.newNinja.belt="";
            $scope.newNinja.rate="";
        
        
    }
       
  

}]);