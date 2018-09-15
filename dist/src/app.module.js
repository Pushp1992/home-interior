(function(){
    'use strict';

    angular.module('catalougeApp', [

        // ui-router module
        'ui.router',

        // angular-animate module
        'ngAnimate',

        'ngMessages',

        'ngMaterial'

    ])
    .config(['$mdIconProvider', function($mdIconProvider) {
        $mdIconProvider.icon('md-toggle-arrow', '/src/img/BS.gif', 48);
      }])
    .config(appConfig)
    .config(function($locationProvider) {
        $locationProvider.hashPrefix('!');
      }).run(function($location) {
        $location.path('/');
      });
      
    appConfig.$inject = ['$urlRouterProvider'];
    function appConfig($urlRouterProvider) {
        $urlRouterProvider
        // .when("/our-services", {})
        .otherwise('/home');

    }

})();