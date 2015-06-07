'use strict';

angular.module('tmfMap')
  .constant('index', {
    fallbackLanguage: ['en_US'],
    languages: {
      'en_US': {
        APP_TITLE: 'The Migrants\' Files',
        INFOWINDOW_CONTENT: 'Hello world'
      },
      'fr_FR': {
        APP_TITLE: 'The Migrants\' Files',
        INFOWINDOW_CONTENT: 'Bonjour le monde'
      }
    }
  });
