var application = angular.module("Application", ['ui.router']);
application.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state("indexpage", {
                abstract: true,
                templateUrl: 'views/index-page/indexContainer.html'
            }).state("indexpage.home", {
                url: '/',
                views: {
                    'logo': {
                        templateUrl: 'views/index-page/logo.html',
                        controller: function ($scope) {
                        }
                    },
                    'login': {
                        templateUrl: 'views/index-page/login.html',
                        controller: 'LoginController'
                    },
                    'content1': {
                        templateUrl: 'views/index-page/content1.html',
                        controller: ['$log', '$scope', function ($log, $scope) {

                        }]
                    },
                    'content2': {
                        templateUrl: 'views/index-page/content2.html',
                        controller: ['$log', '$scope',
                            function (log, scope) {

                            }]

                    }, 'header': {
                        templateUrl: 'views/index-page/header.html',
                        controller: ['$log', '$scope',
                            function ($log, $scope) {
                                $scope.headerMsg = "ESPARK INNOVATION LABS";
                            }]
                    },
                    'footer': {
                        templateUrl: 'views/index-page/footer.html',
                        controller: ['$log', '$scope',
                            function ($log, $scope) {
                                $scope.footerMsg = "All Right Reserved";
                            }]
                    }
                }

            }).state("home", {
                abstract: true,
                templateUrl: 'views/home-page/homeContainer.html'
            }).state("home.homeContent", {
                url: '/',
                views: {
                    'homeContent': {
                        templateUrl: 'views/home-page/homeContent.html',
                        controller: ['$log', '$scope', function ($log, $scope) {
                            $scope.homeContent="welcome to home page";
                        }]
                    },
                    'header': {
                        templateUrl: 'views/home-page/header.html',
                        controller: ['$log', '$scope',
                            function ($log, $scope) {
                                $scope.headerMsg = "ESPARK INNOVATION LABS";
                            }]
                    },
                    'footer': {
                        templateUrl: 'views/home-page/footer.html',
                        controller: ['$log', '$scope',
                            function ($log, $scope) {
                                $scope.footerMsg = "All Right Reserved";
                            }]
                    }
                }

            })
    }]);