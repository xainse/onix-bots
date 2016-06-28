'use strict';

angular.
    module('botList').
    component('botList', {
       templateUrl: 'bot-list/bot-list.template.html',
        controller: function BotListController($http) {
            var self = this;
            self.orderProp = 'type';

            $http.get('data/bots.json').then(function(response) {
               self.bots = response.data;
            });
        }
    });
