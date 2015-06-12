"use strict";angular.module("tmfMap",["ngAnimate","ngTouch","ngSanitize","ngCookies","pascalprecht.translate"]),angular.module("tmfMap").directive("main",["main",function(a){return{controller:"MainCtrl",templateUrl:"app/main/main.html",restrict:"EA",link:function(e,n){var t=n.find(".main__map");cartodb.createVis(t[0],a.viz).done(function(n,t){t[1].getSubLayer(0).setInteractivity(a.interactivity),t[1].on("featureClick",function(a,n,t,i){e.$apply(function(){e.$broadcast("feature:click",i)})}),e.$apply(function(){e.$broadcast("map:loaded",[n,t])})})}}}]),angular.module("tmfMap").controller("MainCtrl",["$scope","main",function(a,e){a.dataset=e.dataset,a.$on("feature:click",function(e,n){a.selectedEntry=n,a.showSidebar=!0}),a.$on("map:loaded",function(a,e){var n=e[1];n[1].getSubLayer(0).infowindow.clear()})}]),angular.module("tmfMap").constant("main",{interactivity:["cartodb_id","deaths","lat","long"],viz:"http://jplusplus.cartodb.com/api/v2_1/viz/22a9ba36-10f1-11e5-91e1-0e0c41326911/viz.json",dataset:"https://jplusplus.cartodb.com/tables/the_migrants_files_refugees_and_migrants_who_d/public"}),angular.module("tmfMap").config(["$translateProvider","index",function(a,e){_.forEach(e.languages,function(e,n){a.translations(n,e)}),a.registerAvailableLanguageKeys(_.keys(e.languages)).determinePreferredLanguage().fallbackLanguage(e.fallbackLanguage).useCookieStorage()}]),angular.module("tmfMap").run(["$translate","$location","index",function(a,e,n){var t=e.search().lang;t&&_.keys(n.languages).indexOf(t)>-1&&a.use(t)}]),angular.module("tmfMap").config(["$locationProvider",function(a){a.html5Mode(!0)}]),angular.module("tmfMap").constant("index",{fallbackLanguage:["en_US"],languages:{en_US:{APP_TITLE:"The Migrants' Files - EN",INFOWINDOW_CONTENT:"{{ deaths }} refugees and migrants died at this location between 2000 and June 18,2015."},fr_FR:{APP_TITLE:"The Migrants' Files - FR",INFOWINDOW_CONTENT:"{{ deaths }} réfugiés et migrants sont morts à cet endroit entre l'an 2000 et le 18 juin 2015."},de_DE:{APP_TITLE:"The Migrants' Files - DE",INFOWINDOW_CONTENT:"{{ deaths }} Flüchtlinge und Migranten sind an dieser Stelle zwischen 2000 und den 18.6.2015 gestorben."},se_SE:{APP_TITLE:"The Migrants' Files - SE",INFOWINDOW_CONTENT:"{{ deaths }} flyktingar och migranter dog på den här platsen mellan 2000 och 2015 (18 juni)."},pl_PL:{APP_TITLE:"The Migrants' Files - PL",INFOWINDOW_CONTENT:"{{deaths}} uchodźców i imigrantów zginęło w tym miejscu między 2000 rokiem a 18 czerwca 2025 roku."}}}),angular.module("tmfMap").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="main"><div class="main__map"></div><div class="main__sidebar" ng-show="showSidebar"><a class="main__sidebar__close" ng-click="showSidebar = false">&times; <span class="sr-only">close</span></a><div class="main__sidebar__body"><p class="lead">{{ \'INFOWINDOW_CONTENT\' | translate:selectedEntry }}</p></div></div></div>')}]);