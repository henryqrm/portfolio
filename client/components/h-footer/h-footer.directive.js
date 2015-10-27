'use strict';

angular.module('henryQrmApp')
  .directive('hFooter', function () {
    return {
      templateUrl: 'components/h-footer/h-footer.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });