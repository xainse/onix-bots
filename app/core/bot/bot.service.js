'use strict';

angular.
    module('core.bot').
    factory('Bot', ['$resource',
        function($resource) {
            return $resource('bot/:botId.json', {}, {
                query: {
                    method: 'GET',
                    params: {phoneId: 'phones'},
                    isArray: true
                }
            });
        }
    ]);

