'use strict';

import $        from 'jquery';
import angular  from 'angular';
import harvest  from 'harvest';

// angular modules
import 'angular-ui-router';
import 'angular-parse';
import 'angular-fullpage.js';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'fullPage.js',
  'Parse',
  'templates',
  'app.filters',
  'app.controllers',
  'app.services',
  'app.directives'
];

// mount on window for testing
window.app = angular.module('app', requires);

angular.module('app').constant('AppSettings', require('./constants'));

angular.module('app').config(require('./on_config'));

angular.module('app').run(require('./on_run'));

angular.bootstrap(document, ['app'], {
  strictDi: true
});
