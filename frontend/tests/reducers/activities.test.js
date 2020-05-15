import { expect } from 'chai';

import activities, { initialState } from 'src/reducers/activities';
import { saveActivities } from 'src/actions/user';

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
