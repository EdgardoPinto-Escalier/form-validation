var formValidationApp = angular.module('formValidationApp', []);

formValidationApp.controller('RegistrationController', ['$scope', function($scope) {

  $scope.register = function() {
    $scope.message = 'Welcome ' + $scope.user.firstname;
  };

}]);