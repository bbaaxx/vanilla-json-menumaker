"use strict";
var MenuMaker = (function () {
    function MenuMaker(targetElement, menuItems) {
        this.targetElement = targetElement;
        this.menuItems = menuItems;
    }
    MenuMaker.prototype.deployMarkup = function () {
        var _this = this;
        this.targetElement.innerHTML = '';
        this.menuItems.forEach(function (item) {
            _this.targetElement.appendChild(item.getMarkup());
        });
    };
    return MenuMaker;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MenuMaker;
//# sourceMappingURL=MenuMaker.js.map