export default class Card {
  constructor({ name, link, likes, _id, owner }, handleCardImage, templateSelector, handleDeleteCard, myId, handleLikeCard) {
    this._name = name;
    this._link = link;
		this._likes = likes
    this._templateSelector = templateSelector;
    this._handleCardImage = handleCardImage;
		this._handleDeleteCard = handleDeleteCard;
		this._cardId = _id;
		this._ownerId = owner._id; // id создателя карточки
		this._myId = myId; // мой id
		this._handleLikeCard = handleLikeCard;
  }
	
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".element__image");
    this._cardTitle = this._element.querySelector(".element__name");
    this._cardLikeButton = this._element.querySelector(".element__like");
    this._cardDeleteButton = this._element.querySelector(".element__delete");
		this._likeCounter = this._element.querySelector(".element__like-counter");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

		this.updateLikes(this._likes);
		//this._likeCounter.textContent = this._likes.length;

		if(this._ownerId !== this._myId) {
			this._cardDeleteButton.classList.add('element__hidden-delete')
		}

    this._setEventListeners();

    return this._element;
  }

  deleteCardElement() {
    this._element.remove();
    this._element = null;
  }

	getCardId() {
		return this._cardId;
	}

	updateLikes(likes) {
		this._likes = likes;
		if(this.getIsLiked()) {
			this._cardLikeButton.classList.add("element__action_like");
		} else {
			this._cardLikeButton.classList.remove("element__action_like");
		}
		this._likeCounter.textContent = likes.length;
	}

	getIsLiked() {
		 
	return this._likes.some((like) => {
			return like._id === this._myId;
		})
	}

  // _toggleLikeOnPhoto() {
  //   this._cardLikeButton.classList.toggle("element__action_like");
  // }

  _setEventListeners() {
    this._cardDeleteButton.addEventListener("click", () =>
      this._handleDeleteCard(this)
    );

    this._cardLikeButton.addEventListener("click", () =>
      this._handleLikeCard(this)
    );

    this._cardImage.addEventListener("click", () =>
      this._handleCardImage(this._name, this._link)
    );
  }
}
