/**
 * Created by rajan on 12/31/2016.
 */
Appname.directive("myDirective", function(){
    function linkfunction($scope, elem, attrs, ctrl)
    {

    }
    return{
        replace:true,
        restrict:"AE",
        scope:{},
        /* @ data pass as a string "one way binding"
         = data pass as a object "two way binding"
         & data pass as a function
          */
        template:"<div><h1>Hello World</h1></div>",
        link:linkfunction()
    }
});