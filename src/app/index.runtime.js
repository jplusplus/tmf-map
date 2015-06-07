'use strict';

angular.module('tmfMap')
  .run( function($translate, $location, index) {
    // Look for a language
    var lang =  $location.search().lang;
    // Does a language is given into the URL search part?
    if( lang && _.keys(index.languages).indexOf(lang) > -1 ) {
      // Choose the current language
      $translate.use( lang );
    }
  });
