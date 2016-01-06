(function () {
    'use strict';

    function MainController() {
        this.name = "world"
        this.newContact = {}
        this.contacts = [
            {
                firstName: 'Frank',
                surname: 'Muscles',
                email: 'frank@muscles.com'
            },
            {
                firstName: 'Eddy',
                surname: 'Valentino',
                email: 'eddy@valfam.co.uk'
            }
        ]
    }
    MainController.prototype.saveContact = function () {
        this.contacts.push(this.newContact)
        this.newContact = {};
    }

    angular
        .module('angularGulpDemos')
        .controller('MainController', MainController)
})();
