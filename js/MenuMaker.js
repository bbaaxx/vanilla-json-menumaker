"use strict";
var MenuItem_1 = require('./MenuItem');
var ConfigurationService = (function () {
    function ConfigurationService() {
    }
    return ConfigurationService;
}());
var mockObject = {
    id: 'testItem',
    displayText: 'Test Item',
    href: 'www.google.com',
    hasFlyout: false
};
var testInstance = new MenuItem_1.MenuItem('testItem', 'Test Item', 'www.google.com', false);
var MenuMaker = (function () {
    function MenuMaker(targetElement, menuItems) {
        this.targetElement = targetElement;
        this.menuItems = menuItems;
    }
    return MenuMaker;
}());
exports.MenuMaker = MenuMaker;
//# sourceMappingURL=MenuMaker.js.map