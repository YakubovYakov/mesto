import { clearForm } from "./index.js";

export default class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._formElement = formElement;
    this._buttonSubmit = this._formElement.querySelector(
      this._config.buttonSelector
    );
  }

  enableValidation() {
    this._addInputListeners();
    this._toggleButton();
  }

  _showInputError = (item) => {
    this._inputId = item.id;
    this._errorElement = this._formElement.querySelector(
      `#${this._inputId}-error`
    );

    item.classList.add(this._config.inputErrorClass);
    this._errorElement.textContent = item.validationMessage;
  };

  _hideInputError = (item) => {
    this._inputId = item.id;
    this._errorElement = this._formElement.querySelector(
      `#${this._inputId}-error`
    );

    item.classList.remove(this._config.inputErrorClass);
    this._errorElement.textContent = "";
  };

  _handleFormInput = (item) => {
    if (!item.validity.valid) {
      this._showInputError(item);
    } else {
      this._hideInputError(item);
    }
  };

  resetValidation() {
    this._toggleButton();

    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement);
    });
  }

  _toggleButton() {
    this._isFormValid = this._formElement.checkValidity();

    this._buttonSubmit.disabled = !this._isFormValid;
    this._buttonSubmit.classList.toggle(
      this._config.buttonDisabledClass,
      !this._isFormValid
    );
  }
  _addInputListeners() {
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._config.inputSelector)
    );
    this._inputList.forEach((item) => {
      item.addEventListener("input", () => {
        this._handleFormInput(item);
        this._toggleButton();
      });
    });
  }
}
