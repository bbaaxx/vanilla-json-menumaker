
import { MenuItem } from './MenuItem';

class ConfigurationService {

}

let mockObject = {
  id: 'testItem',
  displayText: 'Test Item',
  href: 'www.google.com',
  hasFlyout: false
};
let testInstance = new MenuItem(
  'testItem', 'Test Item', 'www.google.com', false
);

export class MenuMaker {
  constructor(
    public targetElement : HTMLElement,
    public menuItems : MenuItem[]
  ) {}

}
