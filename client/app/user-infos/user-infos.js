'use strict';

angular.module('webappApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/user-infos', {
        templateUrl: 'app/user-infos/user-infos.html',
        controller: 'UserInfosCtrl'
      });
  });
