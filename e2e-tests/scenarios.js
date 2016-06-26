'use strict';

describe('Onix Bots Application', function() {

  describe('botList', function() {

    beforeEach(function() {
      browser.get('index.php');
    });

    it('should filter the bot list as a user types into the search box', function() {
      var botList = element.all(by.repeater('bot in $ctrl.bots'));
      var query = element(by.model('$ctrl.query'));

      expect(botList.count()).toBe(3);

      query.sendKeys('converter');
      expect(phoneList.count()).toBe(2);

      query.clear();
      query.sendKeys('portal');
      expect(phoneList.count()).toBe(1);
    });

  });

});