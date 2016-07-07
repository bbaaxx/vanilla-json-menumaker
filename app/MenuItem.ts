export interface MenuItemDefinition {
  id : string;
  index: number;
  name : string;
  hasFlyout?: boolean;
  href? : string;
  customTag? : string;
  customClass? : string;
  subNav? : MenuItemDefinition[];
}

export default class MenuItem {

  private wrapperElement : HTMLElement;
  private clickableElement : HTMLElement;
  private itemMarkup : HTMLElement;

  constructor (
    public itemDefinition : MenuItemDefinition
  ) {
     this.wrapperElement = this.generateWrapperElement();
     this.clickableElement = this.generateClickableElement();
     this.itemMarkup = this.integrateMarkup();
    }

  /** Getters */
  public getMarkup() : HTMLElement {
    return this.itemMarkup;
  }

  /** Markup generation */
  private integrateMarkup () : HTMLElement {
    let markup = this.wrapperElement.appendChild(this.clickableElement);
    return this.wrapperElement;
  }

  private generateWrapperElement() : HTMLElement {
    let element = document.createElement(
     this.itemDefinition.customTag && this.itemDefinition.customTag !== '' ? this.itemDefinition.customTag : 'li'
    )
    if (this.itemDefinition.customClass) {
      element.className += ' ' + this.itemDefinition.customClass;
    }
    return element;
  }

  private generateClickableElement() : HTMLElement {
    let linkTarget = this.itemDefinition.hasFlyout ? this.itemDefinition.href : '';
    let element = document.createElement(
     this.itemDefinition.customTag && this.itemDefinition.customTag !== '' ? this.itemDefinition.customTag : 'a'
    );
    element.className = 'clickable-item'
    if (this.itemDefinition.customClass) {
      element.className += ' clickable-' + this.itemDefinition.customClass;
    }
    element.setAttribute('href', this.itemDefinition.href);
    element.innerText = this.itemDefinition.name;
    return element;
  }

}
