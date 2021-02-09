// The Singleton Pattern limits the number of instances of a particular object to just one. This single instance is called the singleton.

class UserStore {
  constructor() {
    if (!UserStore.instance) {
      this._data = [];
      UserStore.instance = this;
    }

    return UserStore.instance;
  }

  //rest is the same code as preceding example
}

const instance = new UserStore();
Object.freeze(instance);

export default instance;
