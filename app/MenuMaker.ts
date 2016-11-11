
import MenuItem from './MenuItem';

export default class MenuMaker {

  constructor(
    public targetElement : HTMLElement,
    public menuItems : MenuItem[]
  ) {}

  public deployMarkup() {
    this.targetElement.innerHTML = '';
    if (this.menuItems) {        
      this.menuItems.forEach(item => {
        this.targetElement.appendChild(item.getMarkup());
      });
    }
  }
}
