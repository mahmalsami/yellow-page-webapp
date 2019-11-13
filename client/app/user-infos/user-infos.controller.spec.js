'use strict';

describe('Controller: UserInfosCtrl', function () {

  // load the controller's module
  beforeEach(module('webappApp'));

  var UserInfosCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserInfosCtrl = $controller('UserInfosCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
