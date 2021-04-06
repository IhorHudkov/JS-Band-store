import User from './User';

export class FetchClient {
  constructor() {
    if (FetchClient.exists) return FetchClient.instance;
    FetchClient.exists = true;
    FetchClient.instance = this;
    this.url = 'https://js-band-store-api.glitch.me';
  }

  async signIn(user) {
    if (!(user instanceof User)) {
      throw new Error(
        'FetchClient.signIn method only works with an instance of the User class'
      );
    }
    const response = await fetch(`${this.url}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: `{ \"username\" : \"${user.name}\" }`
    });
    const result = await response.json();
    user.avatar = result.avatar;
    user.token = result.token;
  }

  async getAllBooks(token) {
    const response = await fetch(`${this.url}/books`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
  }

  async getBookById(token, id) {
    const response = await fetch(`${this.url}/books/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    const result = await response.json();
    return result;
  }

  async buyBooks(token, books) {
    const response = await fetch(`${this.url}/purchase`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: `{ \"books\" : \"${books}\" }`
    });
    const result = await response.json();
    return result;
  }
}

const fetchClient = new FetchClient();

export default fetchClient;
