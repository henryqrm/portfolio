'use strict';

describe('Directive: meHome', function () {

  // load the directive's module and view
  beforeEach(module('henryQrmApp'));
  beforeEach(module('components/me-home/me-home.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<me-home></me-home>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the meHome directive');
  }));
});