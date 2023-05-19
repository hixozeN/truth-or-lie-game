import { LOCAL_STORAGE_TOKEN_KEY } from "./conf.js";

class Api {
  constructor() {
    this._API_URL = 'https://api.quiz.hixozen.ru';
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return res.text().then((text) => {
      throw JSON.parse(text).message || JSON.parse(text).error;
    });
  };

  login({ email, password }) {
    return fetch(this._API_URL + '/login', {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email, password,
      }),
    })
      .then((res) => this._checkResponse(res));
  };

  register({ name, password, email }) {
    return fetch(this._API_URL + '/register', {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name, email, password,
      }),
    })
      .then((res) => this._checkResponse(res));
  };
  
  getAllUsers() {
    return fetch(this._API_URL + '/users', {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
      },
    })
      .then((res) => this._checkResponse(res));
  };

  getUserById(id) {
    return fetch(this._API_URL + '/users/' + id, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
      }
    })
      .then((res) => this._checkResponse(res));
  };

  editCurrentUserData({ name, password, email }) {
    return fetch(this._API_URL + '/users', {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
      },
      method: 'PATCH',
      body: JSON.stringify({
        name, password, email,
      }),
    })
      .then((res) => this._checkResponse(res));
  };

  editUserData({ id, name, password, email }) {
    return fetch(this._API_URL + '/users/' + id, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
      },
      method: 'PATCH',
      body: JSON.stringify({
        name, password, email,
      }),
    })
      .then((res) => this._checkResponse(res));
  };

  deleteUser(id) {
    return fetch(this._API_URL + '/users/' + id, {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY)}`,
      },
      method: "DELETE",
    })
      .then((res) => this._checkResponse(res));
  }

  getRandomFact() {
    return fetch(this._API_URL + '/facts/', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => this._checkResponse(res));
  }
};

export default Api;
