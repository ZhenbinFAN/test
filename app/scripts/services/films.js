'use strict';

/**
 * @ngdoc service
 * @name certificationAngularApp.Films
 * @description
 * # Films
 * Factory in the certificationAngularApp.
 */
angular.module('certificationAngularApp')
  .factory('Films', function (PREFIX, $http) {
    return {
      get: function() {
        return $http.get(PREFIX + 'server/api/movies');
      },

      lookup: function(id) {
        return $http.get(PREFIX + 'server/api/movies/' + id);
      },

      delete: function(id) {
        return $http.delete(PREFIX + 'server/api/movies/' + id);
      },

      put: function(data) {
        return $http.put(PREFIX + 'server/api/movies', data);
      },

      post: function(data) {
        return $http.post(PREFIX + 'server/api/movies', data);
      }

    };
  });
