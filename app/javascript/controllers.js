//Defining App Module
var app = angular.module('flipkartApp');

  //Login controller
app.controller('LoginController', function($scope, $rootScope, $stateParams, $state, LoginService) {
  $rootScope.title = "Flipkart Login";
  $scope.formSubmit = function() {
    if(LoginService.login($scope.username, $scope.password)) {
      $rootScope.userName = $scope.username;
      $scope.error = '';
      $scope.username = '';
      $scope.password = '';
      $state.transitionTo('home');
    } else {
      $scope.error = "Incorrect username/password !";
    }   
  };
});

//new user registration controller
app.controller('registrationController', function($scope, $rootScope, $stateParams, $state, RegistationService){
  $scope.newRegistration = function(){
    if(RegistationService.register($scope.mobNum)) {
      $rootScope.mobNum = $scope.mobNum;
      $scope.error = '';
      $scope.username = '';
      $scope.password = '';
      $state.transitionTo('home');
    } else {
      $scope.error = "Incorrect username/password !";
    }  
  };
});

//Home controller
app.controller('HomeController', 
function($scope, $rootScope, $stateParams, $state, LoginService) {
  $scope.user = $rootScope.userName;
});