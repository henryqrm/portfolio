'use strict';

describe('Directive: hFooter', function () {

  // load the directive's module and view
  beforeEach(module('henryQrmApp'));
  beforeEach(module('components/h-footer/h-footer.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<h-footer></h-footer>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the hFooter directive');
  }));
});