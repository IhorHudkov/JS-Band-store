import User from './User';

describe('User: ', () => {
  describe('constructor method', () => {
    it('only one instance of the class should be instantiated', () => {
      if (User.exists) delete User.instance;
      const user1 = new User();
      const user2 = new User();
      expect(user1).toEqual(user2);
    });
  });
});
