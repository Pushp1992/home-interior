(function(){
    'use strict';

    angular.module('catalougeApp')
        .config(catalougeConfig);

    catalougeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function catalougeConfig($stateProvider, $urlRouterProvider) {
     $stateProvider
         .state('BS-Enterprises', { //  parent
             url: '/home',
             templateUrl: '/src/Catalouge/catalouge.tpl.html',
             controller: 'catalougeController',
             controllerAs: 'catCtrl'

         })
         .state('BS-Enterprises.about-us', { // child
             url: '/about-us',
             templateUrl: '/src/template/about-us.tpl.html'
         })
         .state('BS-Enterprises.services', { // child
            url: '/services',
            templateUrl: '/src/template/services.tpl.html'
        })
        .state('BS-Enterprises.gallery', { // child
            url: '/gallery',
            templateUrl: '/src/template/gallery.tpl.html'
        })
        .state('BS-Enterprises.gallery.interior', { // sub-child
            url: '/interior',
            templateUrl: '/src/template/gallery-interior.tpl.html'
        })
        .state('BS-Enterprises.gallery.exterior', { // sub-child
            url: '/exterior',
            templateUrl: '/src/template/gallery-exterior.tpl.html'
        })
        .state('BS-Enterprises.gallery.woodWork', { // sub-child
            url: '/wood-work',
            templateUrl: '/src/template/gallery-woodWork.tpl.html'
        })
        .state('BS-Enterprises.gallery.flooring', { // sub-child
            url: '/flooring',
            templateUrl: '/src/template/gallery-flooring.tpl.html'
        })
        .state('BS-Enterprises.gallery.painting', { // sub-child
            url: '/painting',
            templateUrl: '/src/template/gallery-painting.tpl.html'
        })
        .state('BS-Enterprises.contact-us', {
            url: '/contact-us',
            templateUrl: '/src/template/contact-us.tpl.html'
        });
    }

})();