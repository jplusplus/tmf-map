'use strict';

angular.module('tmfMap')
  .config( function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
