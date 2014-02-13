'use strict';

angular.module('planningPokerApp')
  .controller('ProjectCtrl', function($scope, $http) {

    var PIVOTAL_API_URL = 'https://www.pivotaltracker.com/services/v5/';
    var TOKEN = 'd71c03712956953870e752cef6a75c03';

    $http({
        method: 'GET',
        url: PIVOTAL_API_URL + 'projects',
        // params: '',
        headers: {'X-TrackerToken': TOKEN}
    }).success(function(data) {
        $scope.data = data;
        console.info(data);
    }).error(function(error) {
        console.log(error);
    });
  });