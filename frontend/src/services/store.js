import { decorate, observable } from "mobx";
import io from "socket.io-client";

class Store {
  // observable
  user = null;
  messages = [];
  socket = null;
  users = [];

  // actions
  setUser(val) {
    localStorage.setItem("user", val);
    this.user = val;
  }
  logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }
  connect() {
    this.socket = io("http://localhost:3001");
    this.socket.emit("login", this.user);
    this.socket.on("messages", (messages) => (this.messages = messages));
    this.socket.on("newUser", (users) => (this.users = users));
  }
  sendMessage(content) {
    this.socket.emit("addMessage", {
      content,
      author: localStorage.getItem("user"),
    });
  }

  // methods
  getUser() {
    return this.user;
  }
  getUsers() {
    return this.users;
  }
  getDay(date) {
    return date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
  }
  getHour(date) {
    return date.getHours() + ":" + date.getMinutes();
  }
}

decorate(Store, {
  user: observable,
  messages: observable,
  users: observable,
});

export default new Store();
