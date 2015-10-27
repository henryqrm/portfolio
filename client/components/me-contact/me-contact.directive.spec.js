'use strict';

describe('Directive: meContact', function () {

  // load the directive's module and view
  beforeEach(module('henryQrmApp'));
  beforeEach(module('components/me-contact/me-contact.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<me-contact></me-contact>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the meContact directive');
  }));
});