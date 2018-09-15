(function(){
    'use strict';

    angular.module('catalougeApp')
        .config(catalougeConfig);

    catalougeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function catalougeConfig($stateProvider, $urlRouterProvider) {
     $stateProvider
         .state('BS-Enterprises', {
             url: '/home',
             templateUrl: '/src/Catalouge/catalouge.tpl.html',
             controller: 'catalougeController',
             controllerAs: 'catCtrl'

         });
    }

})();