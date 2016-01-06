'use strict';

describe('The main view', function () {

    beforeEach(function () {
        browser.get('/index.html');
    });

    it('should disable the submit button when the form is invalid', function () {
        var addButton = element(by.css('button'));
        expect(addButton.isEnabled()).toBe(false);
    });
    it('should enable the submit button when the form is valid', function () {
        element(by.model('main.newContact.firstName')).sendKeys('Frits');
        element(by.model('main.newContact.surname')).sendKeys('Spits'); element(by.model('main.newContact.email')).sendKeys('frits@spits.nl');

        var addButton = element(by.css('button'));
        expect(addButton.isEnabled()).toBe(true);
    });


});
