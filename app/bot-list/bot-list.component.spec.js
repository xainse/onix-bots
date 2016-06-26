describe('botList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('botList'));

    // Test the controller
    describe('BotListController', function() {

        it('should create a `bots` model with 3 bots', inject(function($componentController) {
            var ctrl = $componentController('botList');
            expect(ctrl.bots.length).toBe(3);
        }));

    });

});
