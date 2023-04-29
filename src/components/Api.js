import {httpMethods} from '../utils/constants'

export default class Api {
	constructor(address, token, cohortId) {
		 this.address = address;
		 this.token = token;
		 this.cohortId = cohortId;

	}

	_handleResponse(response) {
		if (response.ok) {
			return response.json()
		} else {
			return Promise.reject(response)
		}
	}

	_request(endpoint, method, body) {
		const fetchInit = {
			method: method,
			headers: {
				authorization: this.token,
				'Content-Type': 'application/json'
			}
		}

		return fetch(`${this.address}/${this.cohortId}/${endpoint}`, 
			body 
				? {
						...fetchInit,
						body: JSON.stringify(body)
					}
				: fetchInit
		).then(this._handleResponse)
	}


	getCards() {
		return this._request('cards', httpMethods.get)
	}

	getUserInfo() {
		return this._request('users/me', httpMethods.get)
	}

	updateUserInfo(userData) {
		return this._request('users/me', httpMethods.patch, userData)
	}

	addNewCard(cardData) {
		return this._request('cards', httpMethods.post, cardData)
	}

	deleteCard(cardId) {
		return this._request(`cards/${cardId}`, httpMethods.delete)
	}

	changeAvatarUser(avatar) {
		return this._request('users/me/avatar', httpMethods.patch, avatar)
	}

	likeCard(cardId, isLiked) { 
		return this._request(`cards/${cardId}/likes`, isLiked ? httpMethods.delete : httpMethods.put) 
	}

	}
