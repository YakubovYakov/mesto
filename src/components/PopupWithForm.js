import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formSelector = this._popupSelector.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = Array.from(
      this._popupSelector.querySelectorAll(".popup__input")
    );
		this._submitButton = this._popupSelector.querySelector(".popup__button");
		this._initialButtonText = this._submitButton.textContent;
  }
  // --------- Метод, который собирает данные всех полей формы
  _getInputValues() {
    const values = {};
    this._inputList.forEach((inputElement) => {
      values[inputElement.name] = inputElement.value;
    });
    return values;
  }

	formLoading(isLoading) {
		if(isLoading) {
			this._submitButton.textContent = 'Сохранение...';
		} else {
			this._submitButton.textContent = this._initialButtonText;
		}
	}

  close() {
    this._formSelector.reset(); // сброс формы 
    super.close();
  }

  setEventListeners() {
		// --------- перезаписывает родительский метод
		super.setEventListeners();
		// --------- обработчик сабмита формы 
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
