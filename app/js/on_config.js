'use strict';

function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, ParseProvider, AppSettings) {
  'ngInject';

  $locationProvider.html5Mode(true);
  
  // Routes
  $stateProvider
    
    // =====================
    // Website Routes
    // =====================
    .state('Site', {
      controller: 'SiteCtrl as site',
      templateUrl: 'layouts/site.html'
    })
      
      // Home: /
      .state('Site.Home', {
        url: '/',
        controller: 'HomeCtrl as home',
        templateUrl: 'site/home.html',
        title: ''
      })
      
      // About: /about
      .state('Site.About', {
        url: '/about',
        controller: 'AboutCtrl as about',
        templateUrl: 'site/about.html',
        title: 'About'
      })
      
      // Work: /work
      .state('Site.Work', {
        url: '/work',
        controller: 'WorkCtrl as work',
        templateUrl: 'site/work.html',
        title: 'Work'
      })
      
      // Planner: /plan
      .state('Site.Planner', {
        url: '/plan',
        controller: 'PlannerCtrl as planner',
        templateUrl: 'site/planner.html',
        title: 'Planner'
      })
    
    // =====================
    // Login: /login
    // =====================
    .state('Login', {
      url: '/login',
      controller: 'LoginCtrl as login',
      templateUrl: 'panel/auth/login.html'
    })
  
    // =====================
    // Panel Routes
    // =====================
    .state('Panel', {
      url: '/panel',
      abstract: true,
      templateUrl: 'layouts/panel.html',
      title: 'Panel',
      resolve: {
        authorize: ['Authorization', function (Authorization) {
          console.log(Authorization);
          return Authorization.authorize();
        }]
      }
    })
      
      .state('Panel.Dashboard', {
        url: '/',
        controller: 'DashboardCtrl as dashboard',
        templateUrl: 'panel/dashboard/index.html',
      })
      
      // 
      // Clients: /panel/clients
      // 
      .state('Panel.Clients', {
        url: '/clients',
        controller: 'ClientsCtrl as clients',
        templateUrl: 'panel/clients/index.html',
        resolve: {
          clients: function ($http) {
            return {};
          }
        }
      })
        
        // New Client: /panel/clients/new
        .state('Panel.Clients.New', {
          url: '/new',
          controller: 'ClientsNewCtrl as client',
          templateUrl: 'panel/clients/new.html'
        })
        
        // View Client: /panel/clients/:clientId
        .state('Panel.Clients.View', {
          url: '/:clientId',
          controller: 'ClientsViewCtrl as client',
          templateUrl: 'panel/clients/view.html'
        })
      
      // 
      // Contacts: /panel/clients/:clientID/contacts
      // 
      .state('Panel.Clients.Contacts', {
        url: '/contacts',
        abstract: true,
        resolve: {
          client: function ($http, $stateParams) {
            return {};
          }
        }
      })
        
        // New Contact: /panel/clients/:clientID/contacts/new
        .state('Panel.Clients.Contacts.New', {
          url: '/new',
          controller: 'ContactsNewCtrl as contact',
          templateUrl: 'panel/contacts/new.html',
        })
        
        // View Contact: /panel/clients/:clientID/contacts/:contactId
        .state('Panel.Clients.Contacts.View', {
          url: '/:contactId',
          controller: 'ContactsViewCtrl as contact',
          templateUrl: 'panel/contacts/view.html',
          resolve: {
            contact: function ($http, $stateParams) {
              return {};
            }
          }
        })
      
      // 
      // Projects: /panel/projects
      // 
      .state('Panel.Projects', {
        url: '/projects',
        controller: 'ProjectsCtrl as projects',
        templateUrl: 'panel/projects/index.html',
        resolve: {
          projects: function ($http) {
            return {};
          }
        }
      })
      
        // New project: /panel/projects/new
        .state('Panel.Projects.New', {
          url: '/new',
          controller: 'ProjectsNewCtrl as project',
          templateUrl: 'panel/projects/new.html'
        })
        
        // View project: /panel/projects/:projectId
        .state('Panel.Projects.View', {
          url: '/:projectId',
          controller: 'ProjectsViewCtrl as project',
          templateUrl: 'panel/projects/view.html',
          resolve: {
            project: function ($http, $stateParams) {
              return {};
            }
          }
        })
      
      // 
      // Proposals: /panel/proposals
      // 
      .state('Panel.Proposals', {
        url: '/proposals',
        controller: 'ProposalsCtrl as proposals',
        templateUrl: 'panel/proposals/index.html',
        resolve: {
          proposals: function ($http) {
            return {};
          }
        }
      })
        
        // New Proposal: /panel/proposals/new
        .state('Panel.Proposals.New', {
          url: '/new',
          controller: 'ProposalsNewCtrl as proposal',
          templateUrl: 'panel/proposals/new.html'
        })
        
        // View Proposal: /panel/proposals/view
        .state('Panel.Proposals.View', {
          url: ':id',
          controller: 'ProposalsViewCtrl as proposal',
          templateUrl: 'panel/proposals/view.html',
          resolve: {
            proposal: function ($http, $stateParams) {
              return {};
            }
          }
        })
      
      // 
      // Settings: /panel/settings
      // 
      .state('Panel.Settings', {
        url: '/settings',
        controller: 'SettingsCtrl as settings',
        templateUrl: 'panel/settings/index.html'
      })
        
        // API Settings: /panel/settings/api
        .state('Panel.Settings.Api', {
          url: '/api',
          controller: 'ApiCtrl as api',
          templateUrl: 'panel/settings/api.html'
        })
    
    
    // =====================
    // Client Routes
    // =====================
    .state('Client', {
      url: '/clients',
      templateUrl: 'layouts/client.html'
    })
  
  ; // End Routes

  $urlRouterProvider.otherwise('/');
  
  // Initialize Parse
  ParseProvider.initialize(AppSettings.parse.appId, AppSettings.parse.restApiKey);
  
  

}

export default OnConfig;