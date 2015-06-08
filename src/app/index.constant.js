'use strict';

angular.module('tmfMap')
  .constant('index', {
    fallbackLanguage: ['en_US'],
    languages: {
      'en_US': {
        APP_TITLE: 'The Migrants\' Files - EN',
        INFOWINDOW_CONTENT: '{{ deaths }} refugees and migrants died at this location between 2000 and April 20,2015.'
      },
      'fr_FR': {
        APP_TITLE: 'The Migrants\' Files - FR',
        INFOWINDOW_CONTENT: '{{ deaths }} refugees and migrants died at this location between 2000 and April 20,2015.'
      }
    }
  });
