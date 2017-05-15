NinjaApp.config(["$routeProvider", function($routeProvider){
    
    $routeProvider
    
        .when("/NinjaList",{
            controller:"NinjaController",    
            templateUrl:"assets/views/NinjaList.html"
                            })
        .when("/Home",{
        controller:"NinjaController",
        templateUrl:"assets/views/Home.html"
                            })
        .otherwise({
        redirectTo:'/Home'
    })
    
}]);