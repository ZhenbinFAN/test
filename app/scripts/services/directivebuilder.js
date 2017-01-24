'use strict';

/**
 * @ngdoc service
 * @name certificationAngularApp.DirectiveBuilder
 * @description
 * # DirectiveBuilder
 * Factory in the certificationAngularApp.
 */
angular.module('certificationAngularApp')
  .factory('DirectiveBuilder', function () {
    return {
      similiController: function(myControllerFn) {
        return {
          scope: {},
          controller: myControllerFn,
          transclude: true,
          link: function (scope, element, attrs, ctrl, transcludeFn) {
            transcludeFn(scope, function (clone) {
              element.append(clone);
            });
          }
        };
      },
      linkWrapper: function(templateFn) {
        return {
          scope: false,
          transclude: true,
          link: function (scope, element, attrs, ctrl, transcludeFn) {
            var node = angular.element(templateFn(scope, element, attrs, ctrl, transcludeFn));

            transcludeFn(scope, function (clone) {
              node.find("ng-transclude").parent().append(clone);
              node.find("ng-transclude").remove();
              element.append(node);
            });
          }
        };
      },
      // TODO: Tester wrapper, pas sur a propos de this.xx
      wrapper: function(template) {
        return this.linkWrapper(function() { return template; });
      },
    };
  });
