/**
 * Created by rajan on 24-12-2016.
 */
    var Appname = angular.module("app",["ngRoute"]);

    Appname.config(function($routeProvider)
    {
        $routeProvider

            .when("/About",{
                templateUrl:"assets/views/About.html"
            })
            .when("/Contact",{
                templateUrl:"assets/views/Contact.html"
            })
            .when("/Education",{
                templateUrl:"assets/views/Education.html"

            })
            .when("/Personal",{
                templateUrl:"assets/views/Personal.html"
            })
            .when("/Career",{
                templateUrl:"assets/views/Career.html"
            })
            .when("/Login",{
                controller:"LoginCtrl",
                templateUrl:"assets/views/Login.html"
            })
            .when("/SignUp",{
                templateUrl:"assets/views/SignUp.html"
            })
            .otherwise({
                controller:"HomeCtrl",
                    templateUrl:"assets/views/Home.html"
        })
            
    });

