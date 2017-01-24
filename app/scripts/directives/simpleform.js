'use strict';

/**
 * @ngdoc directive
 * @name certificationAngularApp.directive:simpleform
 * @description
 * # simpleform
 */
angular.module('certificationAngularApp')
  .directive("simpleform", function(DirectiveBuilder) {
    return DirectiveBuilder.linkWrapper(function (scope, element, attrs, ctrl, transcludeFn) {
      return '<div class="form-group">'
        + '<label class="col-sm-2 control-label">' + attrs.label + '</label>'
        + '<div class="col-sm-10">'
        + '<ng-transclude>'
        + '</div>'
        + '</div>';
    });
  })
