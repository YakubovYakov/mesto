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
		input.validity.valid ? this._hideInputErrors(input) : this._showInputErrors(input);
	}

	_showInputErrors(input) {
		input.classList.add(this._errorClass);
		this._errorElement.textContent = input.validationMessage;
	}

	_hideInputErrors(input) {
		input.classList.remove(this._errorClass);
		const errorElement = document.querySelector(`#${input.id}-error`);
		errorElement.textContent = '';
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
		this._inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
		this._inputList.forEach((input) => {
			input.addEventListener('input', ()=> {
				this._handleFormInput(input)
				this._toggleButton();
			})
		})
	}
	_toggleButton() {
		//debugger
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
		this._inputList.forEach((input)=> 
		{
			this._hideInputErrors(input)
		})
	}
}
/*import { clearForm } from "../scripts/index.js";*/
/*
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
		
		const isFormValid = this._formElement.checkValidity();
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

  // _toggleButton() {
	// 	this._isFormValid = this._formElement.checkValidity();
		
	// 	debugger
  //   this._buttonSubmit.disabled = !this._isFormValid;
  //   this._buttonSubmit.classList.toggle(
  //     this._config.buttonDisabledClass,
  //     !this._isFormValid
  //   );
  // }
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
*/
