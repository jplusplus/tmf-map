'use strict';

angular.module('tmfMap')
  .constant('main', {
    interactivity: ['cartodb_id', 'deaths', 'lat', 'long'],
    viz: 'http://jplusplus.cartodb.com/api/v2/viz/9284b33a-e903-11e4-8de1-0e0c41326911/viz.json',
    dataset: 'https://jplusplus.cartodb.com/tables/the_migrants_files_refugees_and_migrants_who_d/public'
  });
