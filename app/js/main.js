'use strict';

import angular  from 'angular';
import harvest  from 'harvest';
import fullpage from 'fullpage.js';

// angular modules
import 'angular-ui-router';
import 'angular-parse';
import './templates';
import './filters';
import './controllers';
import './services';
import './directives';

// create and bootstrap application
const requires = [
  'ui.router',
  'templates',
  'Parse',
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
