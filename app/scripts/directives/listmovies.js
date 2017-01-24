'use strict';

/**
 * @ngdoc directive
 * @name certificationAngularApp.directive:listMovies
 * @description
 * # listMovies
 */
angular.module('certificationAngularApp')
  .directive("listMovies", function(DirectiveBuilder) {
    return DirectiveBuilder.similiController(function($scope, Films) {
      $scope.refresh = function() {
        Films.get().then(function(res) {
          $scope.films = res.data;
        });
      };

      $scope.refresh();
    });
  });
