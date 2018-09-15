(function(){
    'use strict';

    angular.module('catalougeApp')
        .controller('catalougeController', catalougeController);
        catalougeController.$inject = ['$scope', '$location'];
    function catalougeController($scope, $location) {

        var vm = this;

        // vm.wow = new WOW({
        //     boxClass: 'wow', // default
        //     animateClass: 'animated', // default
        //     offset: 0, // default
        //     mobile: true, // default
        //     live: true // default
        // });
        // vm.wow.init();

    vm.imageGallery = [
      {image: '/src/img/gallery/snap-dir-1/1.jpg'},
      {image: '/src/img/gallery/snap-dir-1/2.jpg'},
      {image: '/src/img/gallery/snap-dir-1/3.jpg'},
      {image: '/src/img/gallery/snap-dir-1/4.jpg'},
      {image: '/src/img/gallery/snap-dir-1/5.jpg'},
      {image: '/src/img/gallery/snap-dir-1/17.jpg'},
      {image: '/src/img/gallery/snap-dir-1/7.jpg'},
      {image: '/src/img/gallery/snap-dir-1/8.jpg'},
      {image: '/src/img/gallery/snap-dir-1/9.jpg'},
      {image: '/src/img/gallery/snap-dir-1/10.jpg'},
      {image: '/src/img/gallery/snap-dir-1/11.jpg'},
      {image: '/src/img/gallery/snap-dir-1/12.jpg'},
      {image: '/src/img/gallery/snap-dir-1/13.jpg'},
      {image: '/src/img/gallery/snap-dir-1/14.jpg'},
      {image: '/src/img/gallery/snap-dir-1/15.jpg'},
      {image: '/src/img/gallery/snap-dir-1/16.jpg'}    
    ];

    }
})();