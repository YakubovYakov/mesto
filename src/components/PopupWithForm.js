import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._formSelector = this._popupSelector.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = Array.from(
      this._popupSelector.querySelectorAll(".popup__input")
    );
  }
  // --------
  _getInputValues() {
    const values = {};
    this._inputList.forEach((inputElement) => {
      values[inputElement.name] = inputElement.value;
    });
    return values;
  }

  close() {
    this._formSelector.reset();
    super.close();
  }

  setEventListeners() {
    super.setEventListeners();
    this._formSelector.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }
}
