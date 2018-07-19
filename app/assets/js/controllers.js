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
    if(RegistationService.login($scope.mobNumber, $scope.passCode)) {
      $rootScope.mobNumber = $scope.mobNumber;
      $scope.error = '';
      $scope.mobNumber = '';
      $scope.passCode = '';
      $state.transitionTo('home');
    } else {
      $scope.error = "Please Enter a Valid Number!";
    }  
  };
});

//Home controller
app.controller('HomeController', 
function($scope, $rootScope, $stateParams, $state, LoginService) {
  $scope.user = $rootScope.userName;
});