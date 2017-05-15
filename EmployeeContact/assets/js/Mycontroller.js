Appname.controller("LoginCtrl",function($scope ,$http, $filter){
    $http.get("data/Name.json").then(function(response){
        $scope.content = response.data;
        $scope.Status= response.status;
        $scope.Statustext = response.statustext;
        $scope.compare = function(){

            $scope.isUserValid= $scope.content.filter(function(input)
            { 
                if(input.Email===$scope.user.email && input.Password===$scope.user.password )
            {
                return(input.Email==$scope.user.email );
            }})

            if($scope.isUserValid.length === 0) {
                alert('user not exist');
            } else {
                if( $scope.user.email== $scope.isUserValid[0].Email){
                    alert("Successfully loggedin");
                }
                else{
                    alert("Password in-correct");
                }
            }
            
            
        };
        
    });

});


Appname.controller("HomeCtrl",["$scope", "$http", function($scope,$http)
{
    $scope.name="rajaneesh";
    $http.get("data/City.json").then(function(response){
        $scope.citydata= response.data.cities;
    });
    
    $scope.category="";
    
    $scope.categoryList=function(value)
    {
        $scope.category= value;

    }
    
   
}])