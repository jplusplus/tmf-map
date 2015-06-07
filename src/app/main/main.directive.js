'use strict';

angular.module('tmfMap')
  .directive('main', function (main) {
    return {
      controller: 'MainCtrl',
      templateUrl: 'app/main/main.html',
      restrict: 'EA',
      link: function(scope, element) {
        // Find the map element
        var map = element.find('.main__map');
        // Build a dataviz inside the map element
        cartodb
          // Create a map using the default URL
          .createVis( map[0], main.viz)
          .done(function(vis, layers) {
            // Triggers a digest
            scope.$apply(function() {
              // Broadcast an event to notice other controllers
              scope.$broadcast('map:loaded', [vis, layers]);
            });
          });
      }
    };
  });
