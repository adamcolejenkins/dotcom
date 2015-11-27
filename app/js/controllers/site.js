'use strict';

function SiteCtrl(AppSettings) {
  'ngInject';
  
  // ViewModel
  const vm = this;
  
  // Global social links, can be used anywhere in site
  vm.socialLinks = [];
  angular.forEach(AppSettings.social, function (value, key) {
    if (value.length > 0) {
      
      vm.socialLinks.push({
        url: value,
        name: key
      });
      
    }
  });

}

export default {
  name: 'SiteCtrl',
  fn: SiteCtrl
};
