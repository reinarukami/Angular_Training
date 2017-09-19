angular.module('MyApp')
.controller('LastContactController', function ($scope, ContactService) {
    $scope.Contact = null;
    ContactService.GetLastContact().then(function (d) {
        $scope.Contact = d.data;
    }, function () {
         alert('Failed');
    });
})
.factory('ContactService', function ($http) {
    var fac = {};
    fac.GetLastContact = function () {
        return $http.get('/Data/GetLastContact');
    }
    return fac;
});
