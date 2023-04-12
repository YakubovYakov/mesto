export default class Card {
  constructor({ name, link }, handleCardImage, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardImage = handleCardImage;
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
    this._cardDeleateButton = this._element.querySelector(".element__delete");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardTitle.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _deletePhotoElement() {
    this._element.remove();
    this._element = null;
  }

  _toggleLikeOnPhoto() {
    this._cardLikeButton.classList.toggle("element__action_like");
  }

  _setEventListeners() {
    this._cardDeleateButton.addEventListener("click", () =>
      this._deletePhotoElement()
    );

    this._cardLikeButton.addEventListener("click", () =>
      this._toggleLikeOnPhoto()
    );

    this._cardImage.addEventListener("click", () =>
      this._handleCardImage(this._name, this._link)
    );
  }
}
