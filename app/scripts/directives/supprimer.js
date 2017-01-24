'use strict';

/**
 * @ngdoc directive
 * @name certificationAngularApp.directive:supprimer
 * @description
 * # supprimer
 */
angular.module('certificationAngularApp')
  .directive("supprimer", function() {
    return {
      scope: {
        film: "=film",
        done: "&done"
      },
      controller: function($scope, Films, $location, $interval) {
        $scope.pleaseConfirmShown = false;
        $scope.disabled = false;

        $scope.pleaseConfirm = function() {
          if (!$scope.pleaseConfirmShown) {
            $scope.pleaseConfirmShown = true;

            // Prevent double clicks
            $scope.disabled = true;
            $interval(function() {
              $scope.disabled = false;
            }, 750);
          }
          else {
            // Prevent double clicks sending data twice
            $scope.disabled = true;

            Films.delete($scope.film).then(function() {
              if ($scope.done) {
                $scope.done();
              }
            });
          }
        };
      },
      transclude: false,
      template: '<button class="btn btn-danger" ng-disabled="disabled" ng-click="pleaseConfirm()">{{!pleaseConfirmShown ? "Supprimer" : "Confirmer ?"}}</button>',
    };
  });
