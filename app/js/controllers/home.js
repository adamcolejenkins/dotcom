'use strict';

function HomeCtrl() {

  // ViewModel
  const vm = this;

  vm.posts = [
    {
      slug: 'welcome',
      title: 'Adam Jenkins',
      background: '/images/title-screen-bg.jpg'
    }
  ];

}

export default {
  name: 'HomeCtrl',
  fn: HomeCtrl
};
