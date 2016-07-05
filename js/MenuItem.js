"use strict";
var MenuItem = (function () {
    function MenuItem(id, displayText, href, hasFlyout, customTag, customClass, flyoutItems) {
        this.id = id;
        this.displayText = displayText;
        this.href = href;
        this.hasFlyout = hasFlyout;
        this.customTag = customTag;
        this.customClass = customClass;
        this.flyoutItems = flyoutItems;
        this.wrapperElement = this.makeWrapperElement();
        this.clickableElement = this.makeClickableElement();
        this.itemMarkup = this.makeMarkup();
    }
    MenuItem.prototype.getMarkup = function () {
        return this.itemMarkup;
    };
    MenuItem.prototype.makeMarkup = function () {
        var markup = this.wrapperElement.appendChild(this.clickableElement);
        return this.wrapperElement;
    };
    MenuItem.prototype.makeWrapperElement = function () {
        var element = document.createElement(this.customTag && this.customTag !== '' ? this.customTag : 'li');
        if (this.customClass) {
            element.className += ' ' + this.customClass;
        }
        return element;
    };
    MenuItem.prototype.makeClickableElement = function () {
        var linkTarget = this.hasFlyout ? this.href : '';
        var element = document.createElement(this.customTag && this.customTag !== '' ? this.customTag : 'a');
        element.className = 'clickable-item';
        if (this.customClass) {
            element.className += ' clickable-' + this.customClass;
        }
        element.setAttribute('href', this.href);
        element.innerText = this.displayText;
        return element;
    };
    return MenuItem;
}());
exports.MenuItem = MenuItem;
//# sourceMappingURL=MenuItem.js.map