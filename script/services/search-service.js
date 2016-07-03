(function () {
    'use strict';
    angular.module('HomepageApp')
        .factory('searchService', ['$http', function ($http) {
            function getQueryString(queryCriteria) {
                return [
                    queryCriteria.value,
                    'count=' + queryCriteria.count,
                    'offset=' + queryCriteria.offset,
                    'safesearch=' + queryCriteria.safesearch
                ].join('&');
            }

            function getSearchAPI() {
                return "https://api.cognitive.microsoft.com/bing/v5.0/search";
            }

            function search(queryCriteria, onSuccess, onFailure) {
                $http(
                    {
                        url: getSearchAPI() + "?q=" + getQueryString(queryCriteria),
                        method: 'GET',
                        headers: getConfig().headers
                    }
                ).then(onSuccess, onFailure);
            }

            function getSearchUrl(queryCriteria) {
                return "https://www.bing.com/search" + "?q=" + getQueryString(queryCriteria);
            }

            return {
                search: search,
                getSearchUrl: getSearchUrl
            };
        }]);
})();
