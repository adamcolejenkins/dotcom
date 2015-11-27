'use strict';

function LoginCtrl(Principle) {

  // ViewModel
  const vm = this;

  vm.login = function (username, password) {
    Principle.authenticate(username, password);
  }

}

export default {
  name: 'LoginCtrl',
  fn: LoginCtrl
};
