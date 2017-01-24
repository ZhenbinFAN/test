'use strict';

/**
 * @ngdoc directive
 * @name certificationAngularApp.directive:movieedit
 * @description
 * # movieedit
 */
angular.module('certificationAngularApp')
  .directive("movieedit", function(DirectiveBuilder) {
    return DirectiveBuilder.similiController(function($scope, Films, $routeParams, $location) {
      var filmId = $routeParams.film;
      Films.lookup(filmId).then(function(res) {
        $scope.film = res.data;
      });

      $scope.removeDone = function() {
        $location.path("/");
      }

      $scope.valider = function() {
        Films.put($scope.film).then(function(res) {
          $location.path("/" + $scope.film.id);
        });
      };
    });
  })
