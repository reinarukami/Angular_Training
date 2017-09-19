angular.module('MyApp')
.controller('LoginController', function ($scope, LoginService) {
    $scope.isLoggedIn = false;
    $scope.Message = '';
    $scope.Submitted = false;
    $scope.isFormValid = false;

    $scope.LoginData = {
        Username: '',
        Password: ''
    };

    $scope.$watch('f1.$valid', function (newVal) {
        $scope.isFormValid = newVal;
    });

    $scope.Login = function () {
        $scope.Submitted = true
        if ($scope.isFormValid) {
            LoginService.GetUser($scope.LoginData).then(function (data) {
                if (data.data.Username != null) {
                    $scope.isLoggedIn = true;
                    $scope.Message = 'Successfully logged in' + data.data.FullName;
                }
                else {
                    alert('Invalid Credentials')
                }
            });
        }
    }

}).factory('LoginService', function ($http) {
    var fac = {};
    fac.GetUser = function (data) {
        return $http({
            url: '/Data/UserLogin',
            method: 'POST',
            data: JSON.stringify(data),
            headers: {'content-type':'application/json'}

        });
    }
    return fac;
});