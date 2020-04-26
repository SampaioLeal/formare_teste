class Store {
  users = [];

  addUser(user) {
    this.users.push(user);
  }
  removeUser(user) {
    this.users = this.users.filter((usr) => {
      if (usr !== user) return usr;
    });
  }
}

module.exports = new Store();
