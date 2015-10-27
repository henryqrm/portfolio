'use strict';

angular.module('henryQrmApp')
  .directive('meBusiness', function () {
    return {
      templateUrl: 'components/me-business/me-business.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });