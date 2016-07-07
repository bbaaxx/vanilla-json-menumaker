import MenuItem from './MenuItem';
import { MenuItemDefinition } from './MenuItem';
import {expect} from 'chai';
import * as jsdom from 'jsdom';

let jsdomJsdom = require("jsdom").jsdom;

describe('MenuItem Class', ()=> {
  // Set up the DOM
  interface GlobalWindow extends NodeJS.Global { document? : any; }
  (global as GlobalWindow).document = jsdomJsdom('<html><body></body></html>');

  let testInstance : MenuItem;
  let mockDefinition : MenuItemDefinition;

  beforeEach(()=> {
    mockDefinition = {
      id: 'hello',
      index: 1,
      name: 'Hello'
    }
  });
  afterEach(()=> {
    mockDefinition = null;
    testInstance = null;
  });

  it('Should create an instance of MenuItem', ()=> {
    testInstance = new MenuItem(mockDefinition);
    expect(testInstance).to.be.an.instanceOf(MenuItem);
  });

  describe('getMarkup method', ()=> {

    it('Should return an HTML element', ()=> {
      testInstance = new MenuItem(mockDefinition);
      let element = testInstance.getMarkup();
      expect(element).to.exist;
    });

    describe('By default', ()=> {
      let element : HTMLElement;

      beforeEach(()=> {
        testInstance = new MenuItem(mockDefinition);
        element = testInstance.getMarkup();
      });
      afterEach(()=> {
        testInstance = null;
        element = null;
      });

      it('Should return a li wrapper element', ()=> {
        expect(element.tagName).to.be.eq('LI');
      });

      it('Should contain an anchor child element', ()=> {
        expect((element.childNodes[0] as HTMLElement).tagName).to.be.eq('A');
      });

      it('Should not set a classname on the wrapper element', ()=> {
        expect(element.className).to.be.eq('');
      });

    })



  })

});
