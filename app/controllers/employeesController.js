angular.module('userDirectoryApp').controller("EmployeesController", function ($scope, employeesService){

var promise = employeesService.getEmployees();
promise.then(function (data)
{
  $scope.employees = data.data;

});

});
