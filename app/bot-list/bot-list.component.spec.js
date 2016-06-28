describe('botList', function() {

    // Load the module that contains the `phoneList` component before each test
    beforeEach(module('botList'));

    // Test the controller
    describe('BotListController', function() {

        var ctrl;

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('botList')
        }));

        it('should create a `bots` model with 3 bots', inject(function($componentController) {
            expect(ctrl.bots.length).toBe(3);
        }));

        it('should set a default value for the `orderProp` model', function() {
            expect(ctrl.orderProp).toBe('type');
        });
    });

});
