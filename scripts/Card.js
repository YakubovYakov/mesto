import {popupCardImageUrl, popupCardImageTitle, openPopup, popupCardImage} from './index.js'

class Card {
	constructor (name, image, templateSelector) {
		this._name = name
		this._image = image
		this._templateSelector = templateSelector
		this._cardElementSelector = '.element'
	}

	_getTemplate () {
		this._photoCardTemplate = document.getElementById(this._templateSelector).content
		this._elementCardPhoto = this._photoCardTemplate.querySelector(this._cardElementSelector).cloneNode(true)
		this._card = this._elementCardPhoto.querySelector('.element__image')
		this._cardTitle = this._elementCardPhoto.querySelector('.element__name')
		this._cardList = this._elementCardPhoto.querySelector('.element__image')
		this._cardLikeButton = this._elementCardPhoto.querySelector('.element__like')
		this._cardtDeleateButton = this._elementCardPhoto.querySelector('.element__delete')
		
	}

	generateCard() {
		this._getTemplate()
		this._card.src = this._image
		this._card.alt = this._name
		this._cardTitle.textContent = this._name
		this._setEventListeners()
		return this._elementCardPhoto
	}

	_deletePhotoElement = ()=>{
		this._elementCardPhoto.remove()
	}

	 _toggleLikeOnPhoto (){
		this._cardLikeButton.classList.toggle('element__action_like')
	 }

	 _openPhotoInBigScreen() {
		popupCardImageTitle.textContent = this._card.alt
		popupCardImageUrl.src = this._card.src
		popupCardImageUrl.alt = this._card.alt
		openPopup(popupCardImage)
	}


	_setEventListeners () {
		this._cardLikeButton.addEventListener('click', ()=> this._toggleLikeOnPhoto())
		this._cardList.addEventListener('click', ()=> this._openPhotoInBigScreen())
		this._cardtDeleateButton.addEventListener('click', this._deletePhotoElement)

		
	}
}

export {Card}
