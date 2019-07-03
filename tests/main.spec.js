import { expect } from 'chai';
import { test, fruta } from '../src/Test';

describe('App', () => {

  it('Should be test a string, returns true', () => {
    expect(test).to.be.equal('string');
  });

});
