'use strict';

angular.module('henryQrmApp')
  .controller('MeHomeCtrl', function($scope) {
    $scope.showNavbarHome = true;
    $scope.imageProfile = 'assets/images/profile.jpg';
    $scope.name = 'Henrique Rodrigues';
    $scope.text = 'Olá, meu nome é Henrique Rodrigues';
    $scope.profession = 'Analista de Sistemas';
  });
