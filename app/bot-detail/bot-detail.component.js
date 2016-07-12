'use strict';

angular.
  module('botDetail').
  component('botDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.botId}}</span>',
    controller: ['$routeParams',
      function BotDetailController($routeParams) {
        this.botId = $routeParams.botId;
      }
    ]
  });
