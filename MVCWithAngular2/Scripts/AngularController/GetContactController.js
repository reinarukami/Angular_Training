var app = angular.module('MyApp' , []);

app.controller('GetContactController', function ($scope, ContactService) {
    $scope.Contact = null;

    $(document).ready(function () {
        $("#fname").bind('input', function () {
            ContactService.GetGivenContact().then(function (d) {
                $scope.Contact = d.data;
            });
        })
    })
})

.factory('ContactService', function ($http) {
    var fac = {};
    fac.GetGivenContact = function (e) {
        return $http.get('/Data/GetGivenContact?Name=' + $("#fname").val());
    }, function () {
        alert('Failed');
    }
    return fac;
});






