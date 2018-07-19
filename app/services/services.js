//Login Service
app.factory('LoginService', function() {
  var admin = 'ram';
  var pass = 'welcome';
  var isAuthenticated = false;
  return {
    login : function(username, password) {
      isAuthenticated = username === admin && password === pass;
      return isAuthenticated;
    },
    isAuthenticated : function() {
      return isAuthenticated;
    }
  };
});

//Registration Service
app.factory('RegistationService', function(){
  var mobNum = 8802232770;
  var code = 8495;
  var isAuthenticated = false;
  return {
    login : function(mobNumber, passCode) {
      isAuthenticated = mobNumber === mobNum && passCode === code;
      return isAuthenticated;
    },
    isAuthenticated : function() {
      return isAuthenticated;
    }
  };
});