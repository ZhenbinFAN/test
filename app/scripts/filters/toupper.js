'use strict';

/**
 * @ngdoc filter
 * @name certificationAngularApp.filter:toUpper
 * @function
 * @description
 * # toUpper
 * Filter in the certificationAngularApp.
 */
angular.module('certificationAngularApp')
  .filter('toUpper', function () {
    return function (input) {
      return input.toUpperCase();
    };
  });
