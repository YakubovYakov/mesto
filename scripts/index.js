let profileName = document.querySelector('.profile__name');
let profileSubtitle = document.querySelector('.profile__subtitle');
let popupInfo = document.querySelector('.popup__form');
let popupName = document.querySelector('.popup__input_edit_name');
let popupProffesion = document.querySelector('.popup__input_edit_about');
const popupElement = document.querySelector('.popup_edit');
const popupDoubleElement = document.querySelector('.popup_add_card');
const popupCloseButton = document.querySelectorAll('.popup__close-button');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupOpenLinkButton = document.querySelector('.profile__add-button');
const popupCreateCardBtn = document.querySelector('.popup__create_btn');
const popupCardTitleInput = document.querySelector('.popup__input_add_place');
const popupCardLinkInput = document.querySelector('.popup__input_add_link');
const forms = document.querySelectorAll('form');
const popupCardImage = document.querySelector('.popup_card_image');
const popupCardImageUrl = popupCardImage.querySelector('img');
const popupCardImageTitle = popupCardImage.querySelector('figcaption');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const cardTemplate = document.querySelector('#element-template').content.querySelector('article');
const cardList = document.querySelector('.elements');

function createCard (data) {
	const card = cardTemplate.cloneNode(true);
	const cardTitle = card.querySelector('.element__name');
	const cardLikeBtn = card.querySelector('.element__like');
	cardLikeBtn.addEventListener('click', () => 
	cardLikeBtn.classList.toggle('element__action_like') )
	const cardDeleteBtn = card.querySelector('.element__delete');
	const cardImg = card.querySelector('img'); 
	cardImg.addEventListener('click', ()=> {
		popupCardImage.classList.remove('hidden');
		popupCardImageUrl.src = data.link
		popupCardImageUrl.alt = data.name
		popupCardImageTitle.textContent = data.name
	})

	cardDeleteBtn.addEventListener('click', ()=> {
		card.remove()
	})
	
	cardTitle.textContent = data.name;
	cardImg.src = data.link;
	cardImg.alt = data.name;

	return card;
}

function renderCard (card) {
	cardList.prepend (createCard(card)) 

}

initialCards.forEach((card)=> {
	renderCard(card)
})

// чистим форму
forms.forEach((form)=> {
	form.addEventListener('submit', (evt)=> {
		evt.preventDefault()
	})
})

function clearForm(form) {
	form.reset()
}
	


popupCreateCardBtn.onclick = (evt)=> {
	renderCard({
	name:popupCardTitleInput.value,
	link:popupCardLinkInput.value,
})
	const form = evt.target.closest ('form');

	const popup = evt.target.closest('.popup');
	closePopup(popup);
	clearForm(form);
}

popupCloseButton.forEach((button) => {
	const popup = button.closest('.popup');
	button.addEventListener('click', () => {
		closePopup(popup);
	})
})


//функция открытия мод окна
function openPopup(popup) {
  popup.classList.remove('hidden');
}
//функция закрытия мод окна
function closePopup(popup) {
 popup.classList.add('hidden');
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

 popupOpenLinkButton.addEventListener('click', () => {

	openPopup(popupDoubleElement);
 });

 const openPopupImg = document.querySelector('.popup_card_image');
 const popupImg = document.querySelector('.popup__image');

	openPopupImg.addEventListener('click', () => {

	openPopup(popupImg);
 });
 
