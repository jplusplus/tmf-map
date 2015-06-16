'use strict';

angular.module('tmfMap')
  .constant('main', {
    interactivity: ['cartodb_id', 'deaths', 'lat', 'long'],
    viz: '//jplusplus.cartodb.com/api/v2_1/viz/22a9ba36-10f1-11e5-91e1-0e0c41326911/viz.json',
    dataset: '//jplusplus.cartodb.com/tables/the_migrants_files_refugees_and_migrants_who_d/public'
  });
