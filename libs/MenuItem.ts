export class MenuItem {

  private wrapperElement;
  private clickableElement;
  private itemMarkup;

  constructor (
    public id : string,
    public displayText : string,
    public href : string,
    public hasFlyout : boolean,
    public customTag? : string,
    public customClass? : string,
    public flyoutItems? : MenuItem[]
  ) {
     this.wrapperElement = this.makeWrapperElement();
     this.clickableElement = this.makeClickableElement();
     this.itemMarkup = this.makeMarkup();
    }

  public getMarkup() {
    return this.itemMarkup; //
  }

  private makeMarkup () {
    let markup = this.wrapperElement.appendChild(this.clickableElement);
    return this.wrapperElement;
  }

  private makeWrapperElement() {
    let element = document.createElement(
     this.customTag && this.customTag !== '' ? this.customTag : 'li'
    )
    if (this.customClass) {
      element.className += ' ' + this.customClass;
    }
    return element;
  }

  private makeClickableElement() {
    let linkTarget = this.hasFlyout ? this.href : '';
    let element = document.createElement(
     this.customTag && this.customTag !== '' ? this.customTag : 'a'
    );
    element.className = 'clickable-item'
    if (this.customClass) {
      element.className += ' clickable-' + this.customClass;
    }
    element.setAttribute('href', this.href);
    element.innerText = this.displayText;
    return element;
  }

}
