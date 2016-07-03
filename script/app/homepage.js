(function(){
    'use strict';
    angular.module('HomepageApp', ['ngRoute'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider
                .when('/explore', {
                    templateUrl: 'partials/explore.html',
                    controller: 'ExploreController'
                })
                .when('/query', {
                    templateUrl: 'partials/query.html',
                    controller: 'QueryController'
                })
                .otherwise({
                    redirectTo: '/explore'
                });
        }]);
})();
