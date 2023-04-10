export default class Card {
	constructor ({data, handleCardClick}, templateSelector) {
		
		this._name = data.name;
		this._link = data.link;
		this._templateSelector = templateSelector;
		//this._cardElementSelector = '.element';
		this._handleCardClick = handleCardClick;
	}
	_getTemplate () {
	 const cardElement = document
	.querySelector(this._templateSelector)
	.content
	.querySelector('.element')
	.cloneNode(true);

	return cardElement;

	}

	generateCard() {
		this._element = this._getTemplate();

		this._cardPhoto = this._element.querySelector('.element__image');
		this._cardTitle = this._element.querySelector('.element__name');
		this._cardLikeButton = this._element.querySelector('.element__like');
		this._cardDeleateButton = this._element.querySelector('.element__delete');

		this._cardPhoto.src = this._link;
		this._cardPhoto.alt = this._name;
		this._cardTitle.textContent = this._name;

		this._setEventListeners();

		return this._element;
	}

	_deletePhotoElement = ()=>{
		this._element.remove()
	} 

	_toggleLikeOnPhoto (){
		this._cardLikeButton.classList.toggle('element__action_like')
	 }

	 _setEventListeners() {
		this._cardDeleateButton.addEventListener('click', this._deletePhotoElement);
		this._cardLikeButton.addEventListener('click', () => {
			this._toggleLikeOnPhoto();
		});
		this._element.addEventListener('click', () => {
			this._handleCardClick(this._name, this._link);
		})

	}
}


/*

export default class Card {
	constructor({ data }, templateSelector) {
		this._link = data.link;
		this._name = data.name;
		this._templateSelector = templateSelector;
	}

	_getTemplate() {
		const cardElement = document
		.querySelector(this._templateSelector)
		.content
		.querySelector('.element')
		.cloneNode(true);

		return cardElement;
	}
/*
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

	 _setEventListeners () {
		this._cardtDeleateButton.addEventListener('click', this._deletePhotoElement);
		this._cardLikeButton.addEventListener('click', ()=> this._toggleLikeOnPhoto);
		this._cardList.addEventListener('click', (evt)=> this._handleCardClick(evt));

}*/

