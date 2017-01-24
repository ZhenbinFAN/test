'use strict';

/**
 * @ngdoc directive
 * @name certificationAngularApp.directive:stars
 * @description
 * # stars
 */
angular.module('certificationAngularApp')
  .directive('stars', function () {
    return {
      scope: {
        rate: "=rate"
      },
      template: '<div class="stars">{{rate | rating}}</div>'
    };
  });
