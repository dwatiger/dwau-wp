(function () {
    'use strict';
    
    angular.module('app').controller('LoginController', LoginController);
    
    LoginController.$inject = ['$location', 'AuthenticationService', 'FlashService'];
    function LoginController($location, AuthenticationService, FlashService) {
        var au = this;
        au.login = login;
        
        (function initController() {
            AuthenticationService.ClearCredentials();
        })();
        
        function login() {
            au.dataLoading = true;
            AuthenticationService.Login(au.username, au.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials(au.username, au.password);
                    $location.path('/');
                } else {
                    FlashService.Error(response.message);
                    au.dataLoading = false;
                }
            });
        };
    }
})();