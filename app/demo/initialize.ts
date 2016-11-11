import MenuMaker from '../MenuMaker';
import ConfigurationService from '../services/ConfigurationService';


export default function initializeMenumaker() {
  let menuConfigSource;

  try {
    menuConfigSource = (document.getElementById('menu-maker-config').dataset as any).menuConfig;
  }
  catch (e) {
    throw new Error(e)
  }

  if (menuConfigSource) {

    let cs = new ConfigurationService(menuConfigSource);
    let menuElements = [].slice.call(document.querySelectorAll('.menu-maker'));

    menuElements.forEach(element => {
      let resolver: string;
      if (element.dataset.menuDynamic) {
        resolver = document.location.pathname.replace(/\//g, '');
      } else {
        resolver = element.dataset.menuList;
      }
      cs.getItemsForMenu(resolver)
      .then(menuItems => {
        let mm = new MenuMaker(element, menuItems);
        mm.deployMarkup();
      })
      .catch(function(e){
        throw new Error(e);
      });
    });
  }

}
