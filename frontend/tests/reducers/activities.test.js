const { expect } = require('chai');
const activities = require('src/reducers/activities');
const { initialState } = require('src/reducers/activities');

describe.only('Activities reducer', () => {
  describe('structure', () => {
    it('Is a function', () => {
      expect(activities).to.be.a('function');
    });

    it('returns the state with initial state value when called without arguments', () => {
      expect(activities()).to.eql(initialState);
    });
  });
});
