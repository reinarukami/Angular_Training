function Employee($scope) {
    $scope.EmployeeID = "10001";
    $scope.EmployeeName = "Name";
}

var app = angular.module("MyApp", []);
app.controller("EmployeeController", Employee);