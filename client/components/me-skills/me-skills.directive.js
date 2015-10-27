'use strict';

angular.module('henryQrmApp')
  .directive('meSkills', function () {
    return {
      templateUrl: 'components/me-skills/me-skills.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });