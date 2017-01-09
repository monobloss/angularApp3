angular.module('userDirectoryApp').service("employeesService", function ($http, $q)
{
var deferred = $q.defer();
$http.get('assets/lib/data.json').then(function (data)
{
  deferred.resolve(data);

});
  this.getEmployees = function () {
    return deferred.promise;
  }

})
