angular.module('MyApp')

// this is the main process after the angular.module().controller(NameofJS, function($scope, name of service it will get){ })
.controller('GetEmployeeController', function ($scope, EmployeeService) {
    $scope.Employees = null;

    EmployeeService.GetEmployeeList().then(function (data) {
        $scope.Employees = data.data;
    },
    //if there will be a problem throw error
    function (error) {
        alert("Problem with database");
    });
})

 //this is where you will get the data ( /Controller/Action?parameter name= parameter value )
.factory('EmployeeService', function ($http) {
    var fac = {};
    fac.GetEmployeeList = function () {
        return $http.get('/Data/GetEmployeeList')
    }
    return fac;

});