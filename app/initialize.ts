import MenuMaker from './MenuMaker';
import ConfigurationService from './ConfigurationService';


export default function initializeMenumaker() {

  let menuConfigSource;

  try {
    menuConfigSource = (document.getElementById('menu-maker-config').dataset as any).menuConfig;
  }
  catch (e) {
    console.log('An error with menu maker configuration was found', e);
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
        let mm = new MenuMaker(
          element,
          menuItems
        );
        mm.deployMarkup();
      });
    });
  }

}
