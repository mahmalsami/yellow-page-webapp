'use strict';

angular.module('webappApp')
  .controller('UserInfosCtrl', function ($scope, $location) {
    $scope.message = 'Hello';
    
    $scope.back = function() {
    	$location.path('main');	
    }

  });
