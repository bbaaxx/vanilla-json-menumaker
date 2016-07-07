"use strict";
var MenuItem_1 = require('./MenuItem');
var HttpService_1 = require('./HttpService');
var ConfigurationService = (function () {
    function ConfigurationService(sourceUrl) {
        var _this = this;
        this.sourceUrl = sourceUrl;
        this.cfgPromise = this.getConfigPromise();
        this.cfgPromise.then(function (config) {
            _this.itemDefinitions = config.menuItemDefinitions;
        });
    }
    ConfigurationService.prototype.getItemsForMenu = function (menuId) {
        var _this = this;
        return this.cfgPromise.then(function (config) {
            var menuItems;
            if (config.menus[menuId]) {
                menuItems = config.menus[menuId].map(function (value) {
                    var menuItem = new MenuItem_1.default(_this.mergeObjects(value, _this.itemDefinitions[value.id]));
                    return menuItem;
                });
            }
            return menuItems;
        });
    };
    ConfigurationService.prototype.getConfigPromise = function () {
        var http = new HttpService_1.default();
        return http.makeCall({ url: this.sourceUrl });
    };
    ConfigurationService.prototype.mergeObjects = function (dst, src) {
        var extended = {};
        var prop;
        for (prop in dst) {
            if (Object.prototype.hasOwnProperty.call(dst, prop)) {
                extended[prop] = dst[prop];
            }
        }
        for (prop in src) {
            if (Object.prototype.hasOwnProperty.call(src, prop)) {
                extended[prop] = src[prop];
            }
        }
        return extended;
    };
    return ConfigurationService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ConfigurationService;
//# sourceMappingURL=ConfigurationService.js.map