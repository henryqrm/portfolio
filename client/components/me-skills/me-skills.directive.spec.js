'use strict';

describe('Directive: meSkills', function () {

  // load the directive's module and view
  beforeEach(module('henryQrmApp'));
  beforeEach(module('components/me-skills/me-skills.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<me-skills></me-skills>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the meSkills directive');
  }));
});