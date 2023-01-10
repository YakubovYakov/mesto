let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupInfo = document.querySelector('.popup__form');
let popupName = document.querySelector('.popup__input_edit_name');
let popupProffesion = document.querySelector('.popup__input_edit_about');
const popupElement = document.querySelector('.popup');
const popupCloseButton = document.querySelector('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button');

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
 popup.classList.remove('popup_opened');
}

//

function formSubmitHandler (evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupProffesion.value;
	closePopup(popupElement);
} 

popupInfo.addEventListener('submit', formSubmitHandler); 

popupOpenButton.addEventListener('click', () => {

	popupName.value = profileName.textContent;
	popupProffesion.value = profileSubtitle.textContent;
  openPopup(popupElement);
});

popupCloseButton.addEventListener('click', () => {
  closePopup(popupElement);
});
