'use strict';

angular.module('tmfMap')
  .constant('index', {
    fallbackLanguage: ['en_US'],
    languages: {
      'en_US': {
        APP_TITLE: 'The Migrants\' Files - EN',
        INFOWINDOW_CONTENT: '{{ deaths }} refugees and migrants died at this location between 2000 and June 18,2015.'
      },
      'fr_FR': {
        APP_TITLE: 'The Migrants\' Files - FR',
        INFOWINDOW_CONTENT: '{{ deaths }} réfugiés et migrants sont morts à cet endroit entre l\'an 2000 et le 18 juin 2015.'
      },
      'de_DE': {
        APP_TITLE: 'The Migrants\' Files - DE',
        INFOWINDOW_CONTENT: '{{ deaths }} Flüchtlinge und Migranten sind an dieser Stelle zwischen 2000 und den 18.6.2015 gestorben.'
      },
      'se_SE': {
        APP_TITLE: 'The Migrants\' Files - SE',
        INFOWINDOW_CONTENT: '{{ deaths }} flyktingar och migranter dog på den här platsen mellan 2000 och 2015 (18 juni).'
      },
      'pl_PL': {
        APP_TITLE: 'The Migrants\' Files - PL',
        INFOWINDOW_CONTENT: '{{deaths}} uchodźców i imigrantów zginęło w tym miejscu między 2000 rokiem a 18 czerwca 2025 roku.'
      }
    }
  });
