import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
	constructor(popupSelector, handleFormSubmit) {
		super(popupSelector);
		this._handleFormSubmit = handleFormSubmit;
		this._formSelector = this._popupSelector.querySelector(".popup__form");
		this._submitButton = this._formSelector.querySelector(".popup__button");
	}

	open(card) {
		super.open();
		this._card = card;
	}

	setEventListeners() {
		super.setEventListeners();
		this._formSelector.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._handleFormSubmit(this._card)
		});
	}

}