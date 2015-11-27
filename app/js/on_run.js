'use strict';

function OnRun($rootScope, $state, $stateParams, Authorization, Principle, AppSettings) {
  'ngInject';

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';
    $rootScope.siteDescription = AppSettings.appDescription;
    $rootScope.siteKeywords = AppSettings.appKeywords;

    if ( toState.title ) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u00BB ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });
  
  // Check If Authorized
  $rootScope.$on('$stateChangeStart', (event, toState, toStateParams) => {
    $rootScope.toState = toState;
    $rootScope.toStateParams = toStateParams;
    
    if (Principle.isIdentityResolved()) {
      Authorization.authorize();
    }
  });

}

export default OnRun;