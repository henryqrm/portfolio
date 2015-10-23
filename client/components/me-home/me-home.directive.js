'use strict';

angular.module('henryQrmApp')
  .directive('meHome', function () {
    return {
      templateUrl: 'components/me-home/me-home.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
