'use strict';

/**
 * @ngdoc directive
 * @name certificationAngularApp.directive:movie
 * @description
 * # movie
 */
angular.module('certificationAngularApp')
  .directive("movie", function(DirectiveBuilder) {
    return DirectiveBuilder.similiController(function($scope, Films, $routeParams) {
      var filmId = $routeParams.film;
      Films.lookup(filmId).then(function(res) {
        $scope.film = res.data;
      });
    });
  });
