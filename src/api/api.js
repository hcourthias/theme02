import axios from 'axios'

 const BASE_URL = "http://localhost:4000/api"


export class API {
  static get(url, callback) {
    axios({
      method: "get",
      url: url,
    }).then(response => {
      callback(response);
    }).catch(error => {
      console.log(error)});
  }
  static post(url, data, callback) {
    axios({
      method: "post",
      url: url,
      data: data
    }).then(response => {
      callback(response);
    }).catch(error => {
      console.log(error)});
  }

  static put(url, data, callback) {
    axios({
      method: "put",
      url: url,
      data: data
    }).then(response => {
      callback(response);
    }).catch(error => {
      console.log(error)});
  }
  static delete(url, callback) {
    axios({
      method: "delete",
      url: url,
    }).then(response => {
      callback(response);
    }).catch(error => {
      console.log(error)});
  }

  static createUser(email, username) {
    this.post(`${BASE_URL}/users`, {user: {email, username}}, response => {
      console.log(response)
    });
  }

  static getUser(id) {
    this.get(`${BASE_URL}/users/${id}`, response => {
      console.log(response)
    });
  }


  static getUserByEmailAndUsername(email, username) {
    this.get(`${BASE_URL}/users?email=${email}&username=${username}`, response => {
      console.log(response)
    });
  }

  static updateUser(id, user) {
    this.put(`${BASE_URL}/users/${id}`, {user}, response => {
      console.log(response)
    });
  }

  static deleteUser(id) {
    this.delete(`${BASE_URL}/users/${id}`, response => {
      console.log(response)
    });
  }
}
