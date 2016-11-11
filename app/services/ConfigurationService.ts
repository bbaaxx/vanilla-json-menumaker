import { MenuItemDefinition }from '../MenuItem';
import MenuItem from '../MenuItem';
import HttpService from './HttpService';

export default class ConfigurationService {

    private cfgPromise: Q.Promise<any>;
    private itemDefinitions: MenuItemDefinition[];

    constructor(private sourceUrl : string) {
        this.cfgPromise = this.getConfigPromise();
        this.cfgPromise.then(config => {
            this.itemDefinitions = config.menuItemDefinitions;
        })
    }

    public getItemsForMenu(menuId: string): Q.Promise<MenuItem[]> {
        return this.cfgPromise.then(config => {
            let menuItems: MenuItem[];
            if (config.menus[menuId]) {
                menuItems = config.menus[menuId].map(value => {
                    let menuItem : MenuItem = new MenuItem(
                      this.mergeDefinitions(value, this.itemDefinitions[value.id])
                    );
                    return menuItem;
                });
            }
            return menuItems;
        });
    }

    private getConfigPromise(): Q.Promise<any> {
        let http = new HttpService();
        return http.makeCall({ url: this.sourceUrl, isJson: true });
    }

    private mergeDefinitions(dst: Object, src: Object) : MenuItemDefinition {
        var extended = <MenuItemDefinition>{};
        let prop;
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
    }

}
