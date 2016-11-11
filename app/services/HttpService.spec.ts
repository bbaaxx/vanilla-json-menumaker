import HttpService from './HttpService';
import {expect} from 'chai';

describe('Http Service', function(){
  let svc;

  beforeEach(()=> {
    svc = new HttpService();
  });

  it('should have a public makeCall method', function() {
    expect(svc.makeCall).to.exist;
  });

  describe('makeCall method', function() {

    it('should return a promise when called with no arguments', function() {
      expect(svc.makeCall()).to.be.a('promise');
    });

  });

});
