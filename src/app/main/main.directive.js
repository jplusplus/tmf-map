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
            // Get all data on click
            layers[1].getSubLayer(0).setInteractivity(main.interactivity);
            // Broadcast click on a feature
            layers[1].on('featureClick', function(ev, latLng, pos, data) {
              // Triggers a digest
              scope.$apply(function() {
                // Broadcast an event to notice other controllers
                scope.$broadcast('feature:click', data);
              });
            });
            // Triggers a digest
            scope.$apply(function() {
              // Broadcast an event to notice other controllers
              scope.$broadcast('map:loaded', [vis, layers]);
            });
          });
      }
    };
  });
