'use strict';

describe('Directive: meBusiness', function () {

  // load the directive's module and view
  beforeEach(module('henryQrmApp'));
  beforeEach(module('components/me-business/me-business.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<me-business></me-business>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the meBusiness directive');
  }));
});