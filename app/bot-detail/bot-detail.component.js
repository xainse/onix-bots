'use strict';

angular.
  module('botDetail').
  component('botDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.botId}}</span>',
    templateUrl: 'bot-detail/bot-detail.template.html',
    controller: ['$http', '$routeParams',
      function BotDetailController($http, $routeParams) {
        var self = this;

        $http.get('bots/' + $routeParams.botId + '.json').then(function(responce){
          self.bot = responce.data;
        });
      }
    ]
  });
