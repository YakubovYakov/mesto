export default class Popup {
	constructor(popupSelector) {
		this._popupSelector = document.querySelector(popupSelector);
		this._buttonClose = this._popupSelector.querySelector('.popup__close-button');
		this._formList = Array.from(document.querySelectorAll('.popup'));
	}
		open() {
			//debugger
			this._popupSelector.classList.add('popup_opened');
			document.addEventListener('keydown', this._handleEscClose);
		};

		close() {
			//this._setEventListeners();
			this._popupSelector.classList.remove('popup_opened');
			document.removeEventListener('keydown', this._handleEscClose);
		};

		_handleEscClose = (evt)=> {
			if (evt.key === 'Escape') {
				this.close();
			};
		};

		setEventListeners() {

			/*this._buttonClose.addEventListener('click', ()=> 
			this.close()
			);
			this._popupSelector.addEventListener('click', (event) =>{
			if (event.target.classList.contains('popup_opened')) {
				this.close();
			}
			})*/

			this._buttonClose.addEventListener('click', ()=> {
				
					this.close();
				
			})
			this._popupSelector.addEventListener('click', (evt) => {
				if(evt.target.classList.contains('popup_opened')) {
					this.close();
				};
				if (evt.target.classList.contains('.popup__close-button')) {
					this.close();
				}
			})
		}
	
}