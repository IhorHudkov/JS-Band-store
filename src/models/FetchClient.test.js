import fetchClient, { FetchClient } from './FetchClient';
import User from './User';

let user;

const userInfo = {
  username: 'Ihor',
  avatar: 'String',
  token: '2x5rzbult2tkare83grw7a'
};

const books = {
  id: '1',
  count: '3',
  price: '25',
  title: 'book',
  author: 'Petya',
  level: 'high',
  description: 'About js',
  cover: 'String',
  tags: ['String']
};

describe('FetchClient: ', () => {
  beforeAll(() => {
    jest.spyOn(window, 'fetch');
    user = new User('Ihor');
  });

  describe('constructor method', () => {
    it('only one instance of the class should be instantiated', () => {
      if (FetchClient.exists) delete FetchClient.instance;
      const client1 = new FetchClient();
      const client2 = new FetchClient();
      expect(client1).toEqual(client2);
    });
  });

  describe('signIn method', () => {
    test('should initialize the token and avatar properties of the user object', async () => {
      window.fetch.mockResolvedValueOnce({
        json: async () => userInfo
      });
      return fetchClient.signIn(user).then(() => {
        expect(user.name).toBe('Ihor');
        expect(user.avatar).toBe('String');
        expect(user.token).toBe('2x5rzbult2tkare83grw7a');
      });
    });

    test('should only works with an instance of the User class', async () => {
      return fetchClient.signIn({}).catch(error => {
        expect(error.message).toBe(
          'FetchClient.signIn method only works with an instance of the User class'
        );
      });
    });
  });

  describe('getAllBooks method', () => {
    test('should return books object', async () => {
      window.fetch.mockResolvedValueOnce({
        json: async () => books
      });
      return fetchClient.getAllBooks(user.token).then(res => {
        expect(res).toEqual(books);
      });
    });
  });
});
