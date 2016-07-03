(function () {
    'use strict';
    angular.module('HomepageApp')
        .controller('QueryController', ['$scope', '$sce', 'navigationService', 'searchService', function ($scope, $sce, navigationService, searchService) {
            var criteria = navigationService.getQueryCriteria();

            var value = criteria.value || "site:miffyliye.org";
            var count = criteria.count || 10;
            var offset = criteria.offset || 0;
            var safesearch = criteria.safesearch || "Off";

            criteria = {
                value: value,
                count: count,
                offset: offset,
                safesarch: safesearch
            };

            showSearchResult(criteria);

            function showSearchResult(criteria) {
                var searchUrl = searchService.getSearchUrl(criteria);
                $sce.trustAsResourceUrl(searchUrl);
                $scope.searchResultUrl =  searchUrl;
            }
        }]);
})();
