'use strict';

angular.module('henryQrmApp')
  .directive('meContact', function () {
    return {
      templateUrl: 'components/me-contact/me-contact.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });