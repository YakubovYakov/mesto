import Popup from './Popup.js';

export class PopupWithImage extends Popup{
	constructor(popupSelector) {
		super(popupSelector);
		
		this._photoName = this._popupSelector.querySelector('.popup__caption');
		this._photoLink = this._popupSelector.querySelector('.popup__image');
	}

	open(name, link) {
		super.open()
		this._photoName.textContent = name;
		this._photoLink.src = link;
		this._photoName.alt = name;
	}
	
}