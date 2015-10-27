'use strict';

describe('Directive: meHenryqrm', function () {

  // load the directive's module and view
  beforeEach(module('henryQrmApp'));
  beforeEach(module('components/me-henryqrm/me-henryqrm.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<me-henryqrm></me-henryqrm>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the meHenryqrm directive');
  }));
});