(function(){
    'use strict';

    angular.module('catalougeApp', [

        // ui-router module
        'ui.router',
        
        // ui.bootstrap
        'ui.bootstrap',
        
        // jkAngularCarousel
        'jkAngularCarousel',

        // angular-animate module
        'ngAnimate',

        'ngMessages',

        'ngMaterial'

    ])
    .config(appConfig);

    appConfig.$inject = ['$urlRouterProvider', '$stateProvider'];

    function appConfig($urlRouterProvider, $stateProvider) {
        $urlRouterProvider.otherwise('/home');

    }

})();