'use strict';

angular.module('henryQrmApp')
  .directive('meHenryqrm', function () {
    return {
      templateUrl: 'components/me-henryqrm/me-henryqrm.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });