import axios from 'axios'

const BASE_URL = "http://localhost:4000/api"

export class API {
  static get(url, callback, errorHandling) {
    axios({
      method: "get",
      url: url,
    }).then(response => {
      callback(response);
    }).catch(error => {
      errorHandling(error)});
  }
  static post(url, data, callback, errorHandling) {
    axios({
      method: "post",
      url: url,
      data: data
    }).then(response => {
      callback(response);
    }).catch(error => {
      errorHandling(error)});
  }

  static put(url, data, callback, errorHandling) {
    axios({
      method: "put",
      url: url,
      data: data
    }).then(response => {
      callback(response);
    }).catch(error => {
      errorHandling(error)});
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
}

export const createUser = (email, username) => {
  return new Promise((resolve, reject) => {
    API.post(`${BASE_URL}/users`, {user: {email, username}}, response => {
      resolve(response)
    }, error => {
      reject(error)
    });
  })
}

export const getUser = (id) => {
  return new Promise((resolve, reject) => {
    API.get(`${BASE_URL}/users/${id}`, response => {
      resolve(response)
    }, error => {
      reject(error)
    });
  });
}


export const getUserByEmailAndUsername = (email, username) => {
  return new Promise((resolve, reject) => {
    API.get(`${BASE_URL}/users?email=${email}&username=${username}`, response => {
      resolve(response)
    }, error => {
      reject(error)
    });
  });
}

export const updateUser = (id, user) => {
  return new Promise((resolve, reject) => {
    API.put(`${BASE_URL}/users/${id}`, {user}, response => {
      resolve(response)
    }, error => {
      reject(error)
    });
  });
}

export const  deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    API.delete(`${BASE_URL}/users/${id}`, response => {
      resolve(response)
    }, error => {
      reject(error)
    });
  });
}

export const  getWorkingTimeByUserID = (userID, workingTimeID) => {
  return new Promise((resolve, reject) => {
    API.get(`${BASE_URL}/workingtimes/${userID}/${workingTimeID}`, response => {
      resolve(response)
    }, error => {
      reject(error)
    });
  });
}
