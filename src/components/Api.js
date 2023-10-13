export default class Api {
    constructor(options) {
      this._url = options.baseUrl;
      this._headers = options.headers;
      this._authorization = options.headers.authorization;
    }

    _checkRes(res) {
        return res.ok 
        ? res.json() 
        : Promise.reject
    }

    getInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkRes)
    }

    getCards() {
        return fetch(`${this._url}/cards`, {
            headers: {
                authorization: this._authorization
            }
        })
        .then(this._checkRes)
    }

    setInfoProfile(data) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.title,
                about: data.subtitle,
            })
        })
        .then(this._checkRes)
    }

    setInfoAvatar(data) {
        return fetch(`${this._url}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.editAvatar,
            })
        })
        .then(this._checkRes)
    }

    addNewCard(data){
        return fetch(`${this._url}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.placeName,
                link: data.placeSrc,
            })
        })
        .then(this._checkRes)
    }

    addLike(cardID) {
        return fetch(`${this._url}/cards/${cardID}/likes`, {
            method: 'PUT',
            headers: {
                authorization: this._authorization,
            }
        })
        .then(this._checkRes)
    }

    deleteLike(cardID) {
        return fetch(`${this._url}/cards/${cardID}/likes`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            }
        })
        .then(this._checkRes)
    }

    deleteCardID(cardID) {
        return fetch(`${this._url}/cards/${cardID}`, {
            method: 'DELETE',
            headers: {
                authorization: this._authorization,
            }
        })
        .then(this._checkRes)
    }
}
