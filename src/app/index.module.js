(function () {
    'use strict';

    angular.module('angularGulpDemos.filters', [])
    angular.module('angularGulpDemos.directives', []);
    angular
        .module('angularGulpDemos',
            ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'toastr', 'angularGulpDemos.filters', 'angularGulpDemos.directives']);            

})();
