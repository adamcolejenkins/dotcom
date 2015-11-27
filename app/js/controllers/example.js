'use strict';

function ExampleCtrl() {

  // ViewModel
  const vm = this;

  vm.title = 'AngularJS, Gulp, and Browserify! Written with keyboards and love!';
  vm.number = 1234;


  vm.mainOptions = {
    sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE'],
    navigation: true,
    navigationPosition: 'right',
    scrollingSpeed: 1000
  }

}

export default {
  name: 'ExampleCtrl',
  fn: ExampleCtrl
};
