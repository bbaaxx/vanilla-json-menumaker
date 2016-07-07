"use strict";
var MenuMaker_1 = require('./MenuMaker');
var MenuItem_1 = require('./MenuItem');
var chai_1 = require('chai');
var jsdomJsdom = require("jsdom").jsdom;
describe('MenuMaker class', function () {
    global.document = jsdomJsdom('<html><body></body></html>');
    var mockElement;
    var mockItems;
    var testInstance;
    beforeEach(function () {
        mockElement = document.createElement('div');
        mockItems = [new MenuItem_1.default({
                id: 'theId',
                index: 1,
                href: 'www.example.com',
                name: 'theName'
            })];
    });
    afterEach(function () {
        mockElement = null;
        mockItems = null;
        testInstance = null;
    });
    it('Should create an instance of MenuMaker', function () {
        testInstance = new MenuMaker_1.default(mockElement, mockItems);
        chai_1.expect(testInstance).to.exist;
        chai_1.expect(testInstance).to.be.an.instanceOf(MenuMaker_1.default);
    });
    describe('deployMarkup method', function () {
        beforeEach(function () {
            testInstance = new MenuMaker_1.default(mockElement, mockItems);
        });
        it('Should render the menu items in the target element', function () {
            chai_1.expect(mockElement.childNodes).to.be.empty;
            testInstance.deployMarkup();
            chai_1.expect(mockElement.childNodes).to.not.be.empty;
        });
    });
});
//# sourceMappingURL=MenuMaker.spec.js.map