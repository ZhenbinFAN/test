'use strict';

/**
 * @ngdoc directive
 * @name certificationAngularApp.directive:movienew
 * @description
 * # movienew
 */
angular.module('certificationAngularApp')
  .directive("movienew", function(DirectiveBuilder) {
    return DirectiveBuilder.similiController(function($scope, Films, $location) {
      $scope.valider = function() {
        Films.post($scope.film).then(function(res) {
          $location.path("/" + res.data.id);
        });
      };
    });
  })
