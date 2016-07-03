(function(){
    'use strict';
    angular.module('HomepageApp')
        .controller('ExploreController', ['$scope', 'navigationService', function($scope, navigationService) {
            $scope.queryString = "";
            $scope.submitQuery = function () {
                var queryString = $scope.queryString;

                var siteFilterPattern = /(^|\s)site:[^\s]*/g;
                var hasSiteFilter = siteFilterPattern.exec(queryString);

                var siteMiffyLiyeFilterPattern = /(^|\s)site:(\w*\.)*miffyliye\.org/;
                var hasMiffyLiyeSiteFilter = siteMiffyLiyeFilterPattern.exec(queryString);

                if (!hasSiteFilter || !hasMiffyLiyeSiteFilter) {
                    queryString = queryString.replace(siteFilterPattern, "");
                    queryString = queryString + " site:miffyliye.org";
                }

                navigationService.goTo("query", {q: JSON.stringify({value: queryString})});
            };
        }]);
})();
