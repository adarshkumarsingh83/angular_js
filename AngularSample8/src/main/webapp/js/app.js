angular.module("MyBasicAngularApplicationRoot", []);

angular.module("MyBasicAngularApplicationRoot")
    .controller("MyAppController", ["$scope"
        , function ($scope) {
            $scope.angularMsg = "Welcome to Angular ";
        }
    ]);


angular.module("MyBasicAngularApplicationRoot")
    .directive("myDirective", [ function () {
        return {
            restrict: 'E',
            scope: {
                title: '=myData'
            },  template: '<div  style="background:rosybrown" class="alert" ><h1>{{title}}</h1></div>'
            , link:function(scope,element){
                element.on('click' ,function(){
                    alert("welcome to angular");
                });
            }
        };
    }]);