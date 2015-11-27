'use strict';

function CoverSliderDirective() {
  'ngInject';
  
  return {
    restrict: 'EA',
    templateUrl: 'directives/coverSlider.html',
    replace: true,
    scope: {
      posts: '='
    },
    link: (scope, element) => {
            
    }
  };
  
}

export default {
  name: 'coverSlider',
  fn: CoverSliderDirective
};