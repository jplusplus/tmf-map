'use strict';

angular.module('tmfMap')
  .config( function($translateProvider, index) {
    // For each existing languages
    _.forEach(index.languages, function(values, key) {
      // Add every language one by one
      $translateProvider.translations(key, values);
    });
    // Configure translateProvider
    $translateProvider
      // Use languages keys from configuration
      .registerAvailableLanguageKeys(_.keys(index.languages))
      // Automaticly determines which language use
      .determinePreferredLanguage()
      // Use english as fallback language
      .fallbackLanguage(index.fallbackLanguage)
      // Save the preferer language in a cookie
      .useCookieStorage();
  });
