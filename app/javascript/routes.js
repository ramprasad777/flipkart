(function() {
  var app = angular.module('flipkartApp', ['ui.router']);
   app.run(function($rootScope, $location, $state, LoginService, RegistationService) {
     console.clear();
     console.log('running');
    if(!LoginService.isAuthenticated()) {
        $state.transitionTo('login');
      }else if(!RegistationService.isAuthenticated()){
        $state.transitionTo('registration');
      }
  });
  
  app.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url : '/login',
        templateUrl : '../../pages/login.html',
        controller : 'LoginController'
      })
      .state('home', {
        url : '/home',
        templateUrl : '../../pages/home.html',
        controller : 'HomeController'
      })
      .state('register', {
        url : '/register',
        templateUrl: '../../pages/new-user.html',
        controller: 'registrationController'
      });
      
       $urlRouterProvider.otherwise('/login');
  }]);
 
})();