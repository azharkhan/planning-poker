'use strict';

angular.module('planningPokerApp')
  .controller('AuthCtrl', function($scope, $http, $location) {

    var PIVOTAL_API_URL = 'https://www.pivotaltracker.com/services/v5/';

    $scope.login = function() {
      $http({
        method: 'GET',
        // url: 'https://' + $scope.username + ':' + $scope.password + '@www.pivotaltracker.com/services/v5/me',
        url: PIVOTAL_API_URL + 'me',
        // params: {'user'},
        headers: {'X-TrackerToken': $scope.token}
        }).success(function(data) {
          $scope.data = data;
          console.info(data);
          $location.path('/projects');
        }).error(function(error) {
          console.log(error);
        });
    }
  });