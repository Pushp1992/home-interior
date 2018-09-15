(function(){
    'use strict';

    angular.module('catalougeApp')
        .controller('catalougeController', catalougeController);

        catalougeController.$inject = ['$scope', '$window', '$mdDialog'];
        function catalougeController($scope, $window, $mdDialog) {

        var vm = this; 

    // HOME

    // why chose BS Enterprises
    vm.market = '/src/img/home/market-icon.png';
    vm.products = '/src/img/home/products-icon.png';
    vm.team = '/src/img/home/team-icon.png';

    // Client Image
    vm.brigade = '/src/img/client-image/brigade.jpg';
    vm.execbiotech = '/src/img/client-image/execBiotech.png';
    vm.shobha = '/src/img/client-image/shobha.png';
    vm.simplex = '/src/img/client-image/simplex.jpg';

     /*  carousel */
     vm.dataArray = [
         {image: '/src/img/parallax/img-1.jpg'},
         {image: '/src/img/parallax/img-2.jpg'},
         {image: '/src/img/parallax/img-1.jpg'},
         {image: '/src/img/parallax/img-2.jpg'}
     ];

        // Email us @
        vm.cmpnyMail = "barun.sharma@bsinteriorsolution.com";
        vm.personalMail = "barun1232002@gmail.com";

        vm.mymail='pushp.ranjansingh@gmail.com';
        vm.userMail= '';
        vm.subject = '';
        vm.body = '';

        // we are social @

        vm.facebookImg = '/src/img/contact-us/facebook.png';
        vm.instagramImg = '/src/img/contact-us/instagram.png';
        vm.linkedinImg = '/src/img/contact-us/linkedin.png';
        vm.whatsAppImg = '/src/img/contact-us/whatsapp.png';
        vm.joinWappGroupImg = '/src/img/contact-us/joinWappGrpImg.png';

        vm.openInstagram = function() {
            $window.open('https://www.instagram.com/bs_enterprises_7869/', '_blank');
        }
        vm.openFacebook = () => {
            $window.open('https://www.facebook.com/BS-Enterprises-465993977233982/?modal=admin_todo_tour', '_blank');
        }
        vm.openLinkedin = function() {
            $window.open('https://www.linkedin.com/in/barun-sharma-2b18752a/', '_blank');
        }
        vm.openWhatsapp = function() {
            $window.open('https://chat.whatsapp.com/8QuxYtBU7zVFA0LrcglHWD', '_blank');
        }
        vm.showWappNumber = (index) => {
            $mdDialog.show(
                $mdDialog.alert()
                  .title('WhatsApp us @')
                  .textContent('+91-812-301-1119')
                  .ok('Nice')
                //   .targetEvent(originatorEv)
              );
            //   originatorEv = null;
        }


        // Google Map in iFrame
        $scope.setProject = function (id) {
            $scope.currentProject = $scope.projects[id];
            $scope.currentProjectUrl = $sce.trustAsResourceUrl($scope.currentProject.url);
        }


        // Founder Image
        vm.founderImage = '/src/img/founder-image/founderPic.png';

        // Gallery

         /* Interior */
        vm.interior = [
        {image: '/src/img/gallery/interior/18.jpg'},
        {image: '/src/img/gallery/interior/5.jpg'},
        {image: '/src/img/gallery/interior/38.jpg'},
        {image: '/src/img/gallery/interior/17.jpg'},
        {image: '/src/img/gallery/interior/24.jpg'},
        {image: '/src/img/gallery/interior/16.jpg'},
        {image: '/src/img/gallery/interior/7.jpg'},
        {image: '/src/img/gallery/interior/8.jpg'},
        {image: '/src/img/gallery/interior/9.jpg'},
        {image: '/src/img/gallery/interior/10.jpg'},
        {image: '/src/img/gallery/interior/11.jpg'},
        {image: '/src/img/gallery/interior/12.jpg'},
        {image: '/src/img/gallery/interior/1.jpg'},
        {image: '/src/img/gallery/interior/22.jpg'},
        {image: '/src/img/gallery/interior/017.jpg'},
        {image: '/src/img/gallery/interior/07.jpg'}    
        ];

        /* Exterior */
        vm.exterior = [
            {image: '/src/img/gallery/exterior/1.jpg'},
            {image: '/src/img/gallery/exterior/2.jpg'},
            {image: '/src/img/gallery/exterior/3.jpg'},
            {image: '/src/img/gallery/exterior/4.jpg'},
            {image: '/src/img/gallery/exterior/5.jpg'},
            {image: '/src/img/gallery/exterior/6.jpg'},
            {image: '/src/img/gallery/exterior/7.jpg'},
            {image: '/src/img/gallery/exterior/8.jpg'},
            {image: '/src/img/gallery/exterior/9.jpg'},
            {image: '/src/img/gallery/exterior/10.jpeg'},
            {image: '/src/img/gallery/exterior/11.jpg'},
            {image: '/src/img/gallery/exterior/12.jpg'},
            {image: '/src/img/gallery/exterior/13.jpg'},
            {image: '/src/img/gallery/exterior/14.jpg'},
            {image: '/src/img/gallery/exterior/15.jpg'},
            {image: '/src/img/gallery/exterior/16.jpg'}    
            ];

        /* Wood-work */
        vm.woodWork = [
            {image: '/src/img/gallery/wood-work/1.jpg'},
            {image: '/src/img/gallery/wood-work/2.webp'},
            {image: '/src/img/gallery/wood-work/3.jpg'},
            {image: '/src/img/gallery/wood-work/4.jpg'},
            {image: '/src/img/gallery/wood-work/5.jpg'},
            {image: '/src/img/gallery/wood-work/6.jpg'},
            {image: '/src/img/gallery/wood-work/7.jpg'},
            {image: '/src/img/gallery/wood-work/8.jpg'},
            {image: '/src/img/gallery/wood-work/9.jpg'},
            {image: '/src/img/gallery/wood-work/10.jpg'},   
            ];

        /* Flooring */
        vm.flooring = [
            {image: '/src/img/gallery/flooring/1.jpg'},
            {image: '/src/img/gallery/flooring/2.jpg'},
            {image: '/src/img/gallery/flooring/3.jpg'},
            {image: '/src/img/gallery/flooring/4.jpg'},
            {image: '/src/img/gallery/flooring/5.jpg'},
            {image: '/src/img/gallery/flooring/6.jpg'},
            {image: '/src/img/gallery/flooring/7.jpg'},
            {image: '/src/img/gallery/flooring/8.jpg'},
            {image: '/src/img/gallery/flooring/9.jpg'},
            {image: '/src/img/gallery/flooring/10.jpg'},
            {image: '/src/img/gallery/flooring/11.jpg'},
            {image: '/src/img/gallery/flooring/12.jpg'},   
            ];

        /* Painting */
        vm.painting = [
            {image: '/src/img/gallery/painting/1.jpg'},
            {image: '/src/img/gallery/painting/2.jpg'},
            {image: '/src/img/gallery/painting/3.jpg'},
            {image: '/src/img/gallery/painting/4.jpg'},
            {image: '/src/img/gallery/painting/5.jpg'},
            {image: '/src/img/gallery/painting/6.png'},
            {image: '/src/img/gallery/painting/7.jpeg'},
            {image: '/src/img/gallery/painting/8.jpeg'},
            {image: '/src/img/gallery/painting/9.jpg'},
            {image: '/src/img/gallery/painting/10.jpg'}, 
            ];

    }
})();