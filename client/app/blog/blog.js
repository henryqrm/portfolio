'use strict';

angular.module('henryQrmApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blog', {
        templateUrl: 'app/blog/blog.html',
        controller: 'BlogCtrl'
      });
  });
