angular.module('userDirectoryApp').controller("EmployeeDetails", function ($scope, employeesService, $routeParams){
  $scope.$back = function() {
    window.history.back();
  };
var promise = employeesService.getEmployees();
promise.then(function (data)
{
  $scope.details = data.data;
  $scope.whichItem = $routeParams.itemId;



});
$scope.googleMapsURL = 'https://maps.googleapis.com/maps/api/js?v=3.25&key=AIzaSyC4ssZ0m4kgW_gZTXfbav-zx8apDDbesIo&async=false';
});
