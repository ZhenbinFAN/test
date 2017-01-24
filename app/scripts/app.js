'use strict';

/**
 * @ngdoc overview
 * @name certificationAngularApp
 * @description
 * # certificationAngularApp
 *
 * Main module of the application.
 */
angular
  .module('certificationAngularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/:film', {
        templateUrl: 'views/film.html',
        controller: 'FilmCtrl',
        controllerAs: 'film'
      })
      .when('/edit/:film', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl',
        controllerAs: 'edit'
      })
      .when('/nouveau/nouveau', {
        templateUrl: 'views/nouveau.html',
        controller: 'NouveauCtrl',
        controllerAs: 'nouveau'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
