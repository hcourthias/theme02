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
  static delete(url, callback, errorHandling) {
    axios({
      method: "delete",
      url: url,
    }).then(response => {
      callback(response);
    }).catch(error => {
      errorHandling(error)});
  }

  static createUser(email, username) {
    return new Promise((resolve, reject) => {
      this.post(`${BASE_URL}/users`, {user: {email, username}}, response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    })
  }

  static getUser(id) {
    return new Promise((resolve, reject) => {
      this.get(`${BASE_URL}/users/${id}`, response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    });
  }


  static getUserByEmailAndUsername(email, username) {
    return new Promise((resolve, reject) => {
      this.get(`${BASE_URL}/users?email=${email}&username=${username}`, response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    });
  }

  static updateUser(id, user) {
    return new Promise((resolve, reject) => {
      this.put(`${BASE_URL}/users/${id}`, {user}, response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    });
  }

  static deleteUser(id) {
    return new Promise((resolve, reject) => {
      this.delete(`${BASE_URL}/users/${id}`, response => {
        resolve(response)
      }, error => {
        reject(error)
      });
    });
  }
}
