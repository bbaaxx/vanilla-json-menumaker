"use strict";
var MenuItem_1 = require('./MenuItem');
var chai_1 = require('chai');
var jsdomJsdom = require("jsdom").jsdom;
describe('MenuItem Class', function () {
    global.document = jsdomJsdom('<html><body></body></html>');
    var testInstance;
    var mockDefinition;
    beforeEach(function () {
        mockDefinition = {
            id: 'hello',
            index: 1,
            name: 'Hello'
        };
    });
    afterEach(function () {
        mockDefinition = null;
        testInstance = null;
    });
    it('Should create an instance of MenuItem', function () {
        testInstance = new MenuItem_1.default(mockDefinition);
        chai_1.expect(testInstance).to.be.an.instanceOf(MenuItem_1.default);
    });
    describe('getMarkup method', function () {
        it('Should return an HTML element', function () {
            testInstance = new MenuItem_1.default(mockDefinition);
            var element = testInstance.getMarkup();
            chai_1.expect(element).to.exist;
        });
        describe('By default', function () {
            var element;
            beforeEach(function () {
                testInstance = new MenuItem_1.default(mockDefinition);
                element = testInstance.getMarkup();
            });
            afterEach(function () {
                testInstance = null;
                element = null;
            });
            it('Should return a li wrapper element', function () {
                chai_1.expect(element.tagName).to.be.eq('LI');
            });
            it('Should contain an anchor child element', function () {
                chai_1.expect(element.childNodes[0].tagName).to.be.eq('A');
            });
            it('Should not set a classname on the wrapper element', function () {
                chai_1.expect(element.className).to.be.eq('');
            });
        });
    });
});
//# sourceMappingURL=MenuItem.spec.js.map