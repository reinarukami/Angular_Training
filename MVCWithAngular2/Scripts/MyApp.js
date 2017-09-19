(function () {

    var app = angular.module('MyApp', ['ngRoute']);

    app.controller('HomeController', function ($scope) {
        $scope.Message = "My First Angular Js Training"

    });

})();