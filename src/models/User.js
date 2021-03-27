export default class User {
  constructor(name) {
    if (User.exists) return User.instance;
    User.instance = this;
    User.exists = true;
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get avatar() {
    return this._avatar;
  }

  set avatar(avatar) {
    this._avatar = avatar;
  }

  get token() {
    return this._token;
  }

  set token(token) {
    this._token = token;
  }
}
