export default class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._buttonSelector = config.buttonSelector;
    this._errorClass = config.errorClass;
    this._buttonDisabled = config.buttonDisabled;
    this._form = form;
  }
  _handleFormInput(input) {
    this._errorElement = document.querySelector(`#${input.id}-error`);
    input.validity.valid
      ? this._hideInputErrors(input)
      : this._showInputErrors(input);
  }

  _showInputErrors(input) {
    input.classList.add(this._errorClass);
    this._errorElement.textContent = input.validationMessage;
  }

  _hideInputErrors(input) {
    input.classList.remove(this._errorClass);
    const errorElement = document.querySelector(`#${input.id}-error`);
    errorElement.textContent = "";
  }

  enableValidation() {
    this._setEventListeners();
  }
  resetValidation() {
    this._toggleButton();

    this._inputList.forEach((inputElement) => {
      this._hideInputErrors(inputElement);
    });
  }

  _setEventListeners() {
    this._buttonSubmit = this._form.querySelector(this._buttonSelector);
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    this._inputList.forEach((input) => {
      input.addEventListener("input", () => {
        this._handleFormInput(input);
        this._toggleButton();
      });
    });
  }
  _toggleButton() {
    const isFormValid = this._form.checkValidity();
    isFormValid ? this.activeButton() : this.deactiveButton();
  }
  activeButton() {
    this._buttonSubmit.disabled = false;
    this._buttonSubmit.classList.remove(this._buttonDisabled);
  }
  deactiveButton() {
    this._buttonSubmit.disabled = true;
    this._buttonSubmit.classList.add(this._buttonDisabled);
  }
  hideAllErrors() {
    this._inputList.forEach((input) => {
      this._hideInputErrors(input);
    });
  }
}
