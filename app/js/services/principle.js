'use strict';

import angular from 'angular';

function PrincipleService($q, $http, $timeout) {
  'ngInject';

  const service = {};
  var _identity;
  var _authenticated = false;

  service.isIdentityResolved = function () {
    return angular.isDefined(_identity);
  };
  
  service.isAuthenticated = function () {
    return _authenticated;
  };
  
  service.isInRole = function (role) {
    if (!_authenticated || !_identity.roles) {
      return false;
    }
    
    return _identity.roles.indexOf(role) !== -1;
  };
  
  service.isInAnyRole = function (roles) {
    if (!_authenticated || !_identity.roles) {
      return false;
    }
    
    for (var i = 0; i < roles.length; i++) {
      if (this.isInRole(roles[i])) {
        return true;
      }
    }
  };
  
  service.authenticate = function (username, password) {
    if(username.length > 0 && password.length > 0) {
      
/*
      ParseAuth.login(username, password)
        .then(function (data) {
          console.log(data);
        });
*/
      
    }
  };
  
  service.identity = function (force) {
    var deferred = $q.defer();
    
    if (force === true) {
      _identity = undefined;
    }
    
    if (angular.isDefined(_identity)) {
      deferred.resolve(_identity);
      
      return deferred.promise;
    }else {
      
//       ParseAuth.login();
      
    }
    
    
  };

  return service;

}

export default {
  name: 'Principle',
  fn: PrincipleService
};