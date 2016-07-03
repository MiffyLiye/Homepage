(function () {
    'use strict';
    angular.module('HomepageApp')
        .filter('trustAsResourceUrl', ['$sce', function ($sce) {
            return function(url) {
                return $sce.trustAsResourceUrl(url);
            };
        }]);
})();
