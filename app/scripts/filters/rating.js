'use strict';

/**
 * @ngdoc filter
 * @name certificationAngularApp.filter:rating
 * @function
 * @description
 * # rating
 * Filter in the certificationAngularApp.
 */
angular.module('certificationAngularApp')
  .filter("rating", function() {
    var stars = {
      "0": "",
      "1": "\u2605",
      "2": "\u2605\u2605",
      "3": "\u2605\u2605\u2605",
      "4": "\u2605\u2605\u2605\u2605",
      "5": "\u2605\u2605\u2605\u2605\u2605"
    };

    return function(note) {
      return stars[note];
    }
  });
