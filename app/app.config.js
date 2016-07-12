'use strict';

angular.
  module('botcatApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/bots', {
          template: '<bot-list></bot-list>'
        }).
        when('/bots/:botId', {
          template: '<bot-detail></bot-detail>'
        }).
        otherwise('/bots');
      }
  ]);
