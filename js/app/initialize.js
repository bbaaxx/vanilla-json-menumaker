"use strict";
var MenuMaker_1 = require('./MenuMaker');
var ConfigurationService_1 = require('./ConfigurationService');
function initializeMenumaker() {
    var menuConfigSource;
    try {
        menuConfigSource = document.getElementById('menu-maker-config').dataset.menuConfig;
    }
    catch (e) {
        console.log('An error with menu maker configuration was found', e);
    }
    if (menuConfigSource) {
        var cs_1 = new ConfigurationService_1.default(menuConfigSource);
        var menuElements = [].slice.call(document.querySelectorAll('.menu-maker'));
        menuElements.forEach(function (element) {
            var resolver;
            if (element.dataset.menuDynamic) {
                resolver = document.location.pathname.replace(/\//g, '');
            }
            else {
                resolver = element.dataset.menuList;
            }
            cs_1.getItemsForMenu(resolver)
                .then(function (menuItems) {
                var mm = new MenuMaker_1.default(element, menuItems);
                mm.deployMarkup();
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = initializeMenumaker;
//# sourceMappingURL=initialize.js.map