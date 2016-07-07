"use strict";
var MenuItem = (function () {
    function MenuItem(itemDefinition) {
        this.itemDefinition = itemDefinition;
        this.wrapperElement = this.generateWrapperElement();
        this.clickableElement = this.generateClickableElement();
        this.itemMarkup = this.integrateMarkup();
    }
    /** Getters */
    MenuItem.prototype.getMarkup = function () {
        return this.itemMarkup;
    };
    /** Markup generation */
    MenuItem.prototype.integrateMarkup = function () {
        var markup = this.wrapperElement.appendChild(this.clickableElement);
        return this.wrapperElement;
    };
    MenuItem.prototype.generateWrapperElement = function () {
        var element = document.createElement(this.itemDefinition.customTag && this.itemDefinition.customTag !== '' ? this.itemDefinition.customTag : 'li');
        if (this.itemDefinition.customClass) {
            element.className += ' ' + this.itemDefinition.customClass;
        }
        return element;
    };
    MenuItem.prototype.generateClickableElement = function () {
        var linkTarget = this.itemDefinition.hasFlyout ? this.itemDefinition.href : '';
        var element = document.createElement(this.itemDefinition.customTag && this.itemDefinition.customTag !== '' ? this.itemDefinition.customTag : 'a');
        element.className = 'clickable-item';
        if (this.itemDefinition.customClass) {
            element.className += ' clickable-' + this.itemDefinition.customClass;
        }
        element.setAttribute('href', this.itemDefinition.href);
        element.innerText = this.itemDefinition.name;
        return element;
    };
    return MenuItem;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuItem;
//# sourceMappingURL=MenuItem.js.map