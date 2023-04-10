import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
	constructor( popupSelector, { handleFormSubmit }) {
		super(popupSelector);
		this._formSelector = this._popupSelector.querySelector('.popup__form');
		this._handleFormSubmit = handleFormSubmit;
		
		// this._buttonSubmit = document.querySelector('.popup__create-btn');
		// this._popup = document.querySelector(popupSelector);
		// this._form = this._popup.querySelector('.popup__form');
		// this._inputs = this._popup.querySelectorAll('.popup__input');

	};

	_getInputValues() {
		this._inputList = this._popupSelector.querySelectorAll('.popup__input');
		this._newInputValues = {};
		this._inputList.forEach((inputElement) => {
			this._newInputValues[inputElement.name] = inputElement.value;
		});
		//console.log(this._newInputValues);
		return this._newInputValues;
	};

		/*this._formValues = {};
		this._inputs.forEach((input)=> {
			this._formValues[input.name] = input.value;
		});
		return this._formValues;*/
	

	close() {
		
		this._formSelector.reset();
		super.close();
	};

	setEventListeners() {
		//this._formSelector = this._popupSelector.querySelector('.popup__form');
		super.setEventListeners();
		this._formSelector.addEventListener('submit', (event) => {
			event.preventDefault();
			this._handleFormSubmit(this._getInputValues());
			//console.log(this._getInputValues()); 
			this.close();
		});
		/*this._form.addEventListener('submit', (evt)=> {
			evt.preventDefault();
			this._handleFormSubmit(this._getInputValues());
			this.close();
		});*/
	}

}; 