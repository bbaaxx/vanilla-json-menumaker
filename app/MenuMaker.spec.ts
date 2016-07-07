import MenuMaker from './MenuMaker';
import MenuItem from './MenuItem';
import {expect} from 'chai';
import * as jsdom from 'jsdom';

let jsdomJsdom = require("jsdom").jsdom;

describe('MenuMaker class', ()=> {
  // Set up the DOM
  interface GlobalWindow extends NodeJS.Global { document? : any; }
  (global as GlobalWindow).document = jsdomJsdom('<html><body></body></html>');

  let mockElement : HTMLElement;
  let mockItems : MenuItem[];
  let testInstance : MenuMaker;

  beforeEach(()=>{
    mockElement = document.createElement('div');
    mockItems = [new MenuItem({
      id: 'theId',
      index: 1,
      href: 'www.example.com',
      name: 'theName'
    })]
  });

  afterEach(()=>{
    mockElement = null;
    mockItems = null;
    testInstance = null;
  });


  it('Should create an instance of MenuMaker', ()=> {
    testInstance = new MenuMaker(mockElement, mockItems);
    expect(testInstance).to.exist;
    expect(testInstance).to.be.an.instanceOf(MenuMaker);
  });

  describe('deployMarkup method', function() {

    beforeEach(()=>{
      testInstance = new MenuMaker(mockElement, mockItems);
    });

    it('Should render the menu items in the target element', ()=> {
      expect(mockElement.childNodes).to.be.empty;
      testInstance.deployMarkup();
      expect(mockElement.childNodes).to.not.be.empty;
    });

  });

});
