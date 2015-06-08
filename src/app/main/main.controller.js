'use strict';

angular.module('tmfMap')
  .controller('MainCtrl', function($scope, main) {
    // Link to the dataset
    $scope.dataset = main.dataset;
    // Catch click on a feature
    $scope.$on('feature:click', function(ev, data) {
      // Simply set a scope object with the data
      $scope.selectedEntry = data;
      // Show the sidebar!
      $scope.showSidebar = true;
    });
    // The map had been loaded
    $scope.$on('map:loaded', function(ev, params) {
      // Extract map params
      var layers = params[1];
      // Disbale default behavior by removing infowindow
      layers[1].getSubLayer(0).infowindow.clear();
    });
  });
