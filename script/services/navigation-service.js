(function () {
    'use strict';
    angular.module('HomepageApp')
        .factory('navigationService', ['$location', '$route', function ($location, $route) {
            function goTo(path, search) {
                search = search || {};
                $location.hash(null);
                if (isPathUnchanged(path, search)) {
                    $route.reload();
                }
                else {
                    $location.path(path).search(search);
                }
            }

            function isPathUnchanged(path, search) {
                return _.isEqual(path, getHash()) && _.isEqual(search, $location.search());
            }

            function getHash() {
                return $location.path().replace(/^\//, '');
            }

            return {
                getQueryCriteria: function () {
                    return JSON.parse($location.search().q || '{}');
                },
                goTo: goTo
            };
        }]);
})();
