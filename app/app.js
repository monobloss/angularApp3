var userDirectoryApp = angular.module('userDirectoryApp', ["ngRoute", "ngAnimate", "ngMap"]);


userDirectoryApp.config(['$routeProvider', '$locationProvider',
        function($routeProvider, $locationProvider) {
            $routeProvider
            .when('/', {
                templateUrl: 'app/views/home.html',

            })
                .when('/users', {
                    templateUrl: 'app/views/employeeList.html',
                    controller: 'EmployeesController'
                })
                .when('/employee/:itemId', {
                    templateUrl: 'app/views/employee.html',
                    controller: 'EmployeeDetails'
                })
                .otherwise({
                    redirectTo: '/'

                });


        }]);
