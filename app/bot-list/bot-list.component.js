'use strict';

angular.
    module('botList').
    component('botList', {
       templateUrl: 'bot-list/bot-list.template.html',
        controller: function BotListController() {
            this.bots = [
                {
                    name: "Converter Units",
                    snippet: "An intuitive and quick unit converter provides a complete list of related measurement conversions for a given unit, once it is entered by a user.",
                    link: "http://telegram.me/converter_robot",
                    type: "Telegram",
                    author: {
                        id: "vladislav.baranchuk",
                        name: "Vladislav Baranchuk"
                    }
                },
                {
                    name: "Converter Units",
                    snippet: "An intuitive and quick unit converter provides a complete list of related measurement conversions for a given unit, once it is entered by a user.",
                    link: "https://www.facebook.com/Converter-bot-812105462252621/?fref=ts",
                    type: "Facebook",
                    author: {
                        id: "vladislav.baranchuk",
                        name: "Vladislav Baranchuk"
                    }
                },
                {
                    name: "Portal Cinema Kirovohrad",
                    snippet: "Portal Cinema Kirovohrad - this is the telegram bot for Telegram created to give information about actual movies in the cinema.",
                    link: "",
                    type: "Telegram",
                    author: {
                        id: "vladislav.baranchuk",
                        name: "Vladislav Baranchuk"
                    }
                }
            ];

            this.orderProp = 'type';
        }
    });
