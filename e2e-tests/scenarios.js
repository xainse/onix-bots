'use strict';

describe('Onix Bots Application', function() {

  describe('botList', function() {

    beforeEach(function() {
      browser.get('index.php');
    });


    // Test #1
    it('should filter the bot list as a user types into the search box', function() {
      var botList = element.all(by.repeater('bot in $ctrl.bots'));
      var query = element(by.model('$ctrl.query'));

      expect(botList.count()).toBe(3);

      query.sendKeys('converter');
      expect(botList.count()).toBe(2);

      query.clear();
      query.sendKeys('portal');
      expect(botList.count()).toBe(1);
    });

    // Test #2
    it('should be possible to control bots order via the drop-down menu', function() {
        var queryField = element(by.model('$ctrl.query'));
        var orderSelect = element(by.model('$ctrl.orderProp'));
        var nameOption = orderSelect.element(by.css('option[value="name"]'));
        var botNameColumn = element.all(by.repeater('bot in $ctrl.bots').column('bot.name'));

        function getNames() {
            return botNameColumn.map(function(elem){
                return elem.getText();
            });
        }

        queryField.sendKeys('Portal'); // Let's narrow the dataset to make the assertions shorter

        expect(getNames()).toEqual([
            'Portal Cinema Kirovohrad for Telegram'
        ]);
    });

    // Test #3
    it('should redirect index.php to index.php#!/bots', function(){
      browser.get('index.php');
      expect(browser.getLocationAbsUrl()).toBe('/bots')
    });
  });


  describe('View: bot list', function(){
    beforeEach(function(){
      browser.get('index.php#!/bots')
    })
  });


  describe('View: Bot details', function() {

    beforeEach(function() {
      browser.get('index.pho#!/bot/converter-units-fb');
    });

    it('should display placeholder page with `botId`', function() {
      expect(element(by.binding('$ctrl.botId')).getText()).toBe('converter-units-fb');
    });

  });

});
