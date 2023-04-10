import Card from "../src/components/Card.js";
import FormValidator from "../src/components/FormValidator.js";
import Section from "../src/components/Section.js";
import  Popup  from "../src/components/Popup.js";
import { PopupWithImage } from "../src/components/PopupWithImage.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import UserInfo from "../src/components/UserInfo.js";
import {initialCards, formValidationConfig, profileOpenButton, popupOpenLinkButton, editForm, addForm, popupName, popupProffesion, popupCardTitleInput, popupCardLinkInput} from './utils/constants.js';
import './pages/index.css';

//const popupCardImage = document.querySelector('#view-photo');


const validatorEditForm = new FormValidator(formValidationConfig, editForm);
const validatorAddForm = new FormValidator(formValidationConfig, addForm);
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();
//отрисовка карточек 
const cardList = new Section({
	items: initialCards,
	renderer: (items) => {
		const card = new Card({
				data: items,
				handleCardClick: (name, link) => {

				}
		}, '#element-template'	
	);
		const elementList = card.generateCard();
		cardList.addItem(elementList);
	}
}, '.elements');
cardList.renderItems(initialCards );

//открытие попапа добавления карточки
const popupAddPlace = new PopupWithForm('.popup_add_card', {
	handleFormSubmit: ({name, link}) => {
	 //debugger
		const newCard = new Card({data: {name, link}, handleCardClick: () => {
			popupImage.open(name, link);
		}}, '#element-template', () => {
			popupImage.open(name, link);
		}
		);
		const card = newCard.generateCard()
		cardList.addItem(card)
		
		popupAddPlace.close();
	}
}, '.elements');
popupAddPlace.setEventListeners();
//открытие попапа big image
const popupImage = new PopupWithImage(
	'.popup_card_image', 
	)
	popupImage.setEventListeners();
	
	document.querySelectorAll('.element__image').forEach(cardImage => {
		cardImage.addEventListener('click', (evt) => {
			popupImage.open(evt.target.alt, evt.target.src);
		})
	});
	
	popupOpenLinkButton.addEventListener('click', ()=> {
		popupAddPlace.open();
		validatorAddForm.resetValidation();
		validatorAddForm._toggleButton();
})

const userInfo = new UserInfo({
	userName: '.profile__name',
	job: '.profile__subtitle'
});

const formPopupProfileEdit = new PopupWithForm('.popup_edit', {
	handleFormSubmit: (item) => {
		userInfo.setUserInfo(item.name, item.job)
	}
})
formPopupProfileEdit.setEventListeners();
//formPopupAdd.setEventListeners();

function openPopupEditProfile() {
	formPopupProfileEdit.open();
	popupName.value = userInfo.getUserInfo().name;
	popupProffesion.value = userInfo.getUserInfo().job;
	validatorEditForm.resetValidation();
	validatorEditForm._toggleButton();
}
profileOpenButton.addEventListener('click', openPopupEditProfile);
//
function openPopupAdd() {
	formPopupAdd.open;
}

// function createCard(title, image, templateSelector) {
// 	const card = new Card(title, image, templateSelector, () => {
// 		popupImage.open(title, image)
// 		return card.generateCard();
// 	})
// }
// popupOpenLinkButton.addEventListener('click', openPopupAdd);

/* 
const popupEditProfile = new PopupWithForm('.popup_edit', {
	handleFormSubmit: ({profileData}) => {
		userInfo.setUserInfo({profileData});
	}
})
profileOpenButton.addEventListener('click', ()=> {
	profileName.value = userInfo.getUserInfo().userName
	profileSubtitle.value = userInfo.getUserInfo().job
	
	popupEditProfile.open()
	popupEditProfile.setEventListeners();
})

popupEditProfile.setEventListeners();
// function handleProfileFormSubmit(name, job) {
// 	userInfo.setUserInfo(prop.name, prop.job)
// }

// const formPopupProfileEdit = new PopupWithForm({
// 	popupSelector: '.popup_edit',
// 	handleFormSubmit: (item) => {
// 		userInfo.setUserInfo(item.name, item.job);
// 	}
// })

// formPopupProfileEdit.setEventListeners();

/*
const actualProfileData = 
userInfo.getUserInfo();
popupName.value = actualProfileData.profileName
popupProffesion.value = actualProfileData.profileSubtitle;


//popupWithProfileForm.addEventListener("submit", handleProfileFormSubmit);


//Стас
/*const popupProfile = new PopupWithForm('popup_edit', {
	handleFormSubmit: () => {
		popupProfile.open();
		
		
		popupProfile.close();
	}
})*/

// function createCard(items) {
// 	const card = new Card(items, '#element-template', handleCardClick);
// 	return card.generateCard();
// }

// const cardsRendered = new Section({
// 	items: initialCards,
// 	renderer: (items) => {
// 		cardsRendered.addItem(createCard(items))
// 	}
// }, '.elements');

// cardsRendered.renderItems(initialCards);

/*

function createCard(cardData) {
	const card = new Card(cardData, '#element-template', handleCardClick);
	const elementList = card.generateCard();
	return elementList;
};

const defaultCardList = new Section ({
	items: initialCards,
	renderer: (cardData) => {
		const card = new Card(item, '#element-template', 
		handleCardClick = (name, link)=> {
			popupCardImage.open(name, link);
			}
		);
		defaultCardList.addItem(createCard(cardData));
	}
}, '.elements');
defaultCardList.renderItems();

const popupAddPlace = new PopupWithForm('.popup_edit', {
	handleFormSubmit: (placeData) => {
		defaultCardList.addItem(createCard(placeData));
	}
})
*/
// const cards = new Section({
// 	items: initialCards,
// 	renderer: ({data:item}) => {
// 		const card = new Card(item.link, item.name, '#elements-template');

// 		const cardElement = card.generateCard();
// 		cards.addItem(cardElement);
// 	}
// }, '.elements-list');

// cards.renderItems();

// function handleFormCardSubmit(evt) {
// 	evt.preventDefault();

// 	const newCards = new Section({
// 		items: [{
// 			name: popupCardTitleInput.value,
// 			link: popupCardLinkInput.value
// 		}],
// 		renderer: ({data:item}) => {
// 			const card = new Card(item.link, item.name, '#elements-template');

// 			const cardElement = card.generateCard();
// 			newCards.addItem(cardElement);
// 		}
// 	}, '.elements-list');

// 	newCards.renderItems();

// 	//вызов функции хакрытия попапа
// }




/*
const section = new Section({items: initialCards, renderer:(item)=> {
	const card = createCard(item.name, item.link, "#element-template", (evt) => PopupWithImage.open(evt))
	section.addItem(card)
							}},
	  'elements-list')

section.renderItems();

const popupWithImage = new PopupWithImage('#view-photo')
popupWithImage.setEventListeners()
function createCard(title, url, template, handleCardClick) {
  const card = new Card(title, url, template, handleCardClick);
  return card.generateCard();
}

const popupWithAddPhotoForm = new PopupWithForm('#add-form', (prop)=> {
	const card = createCard(prop.name, prop.link, '#element-template', (evt) => popupWithImage.open(evt))
	section.addItem(card)
})
*/

// const cardList = new Section(
// 	{
// 		items: initialCards,
// 		renderer: (item) => {
// 			const card = new Card(item, '#element-template', popupCardImage);

// 			const cardElement = card.generateCard();

// 			cardList.addItem(cardElement);
// 		}
// 	}, cardsContent);

// const addCard = (data, item) => {
// 	const card = new Card(data, template, popupCardImage);
// 	return card.generateCard();
// };

/*
popupWithAddPhotoForm.setEventListeners()
popupOpenLinkButton.addEventListener('click', ()=> {
	validatorAddForm.deactiveButton()
	validatorAddForm.hideAllErrors()
	popupWithAddPhotoForm.open()
})

const popupWithProfileForm = new PopupWithForm('#profile-form', (prop)=>{
	newUser.setUserInfo(prop.name, prop.job)
})

popupWithProfileForm.setEventListeners()
const newUser = new UserInfo({name: 'profile__name', job: 'profile__subtitle'})
profileOpenButton.addEventListener('click', ()=> {
	popupName.value = newUser.getUserInfo().name
	popupProffesion.value = newUser.getUserInfo().job
	validatorEditForm.deactiveButton()
	validatorEditForm.hideAllErrors()
	popupWithProfileForm.open()
})





/*
initialCards.forEach((item) => {
  const card = createCard(item.name, item.link, "element-template");
  photoCardList.prepend(card);
});



popupCreateCardBtn.addEventListener("click", (evt) => {
  evt.preventDefault();
  const newCard = createCard(
    popupCardTitleInput.value,
    popupCardLinkInput.value,
    "element-template"
  );
  photoCardList.prepend(newCard);
  closePopup(cardPopup);
  clearForm(popupCardForm);
  validatorAddForm.resetValidation();
});

popupContainer.forEach((item) => {
  item.addEventListener("click", (evt) => {
    evt.stopPropagation();
  });
});

popupList.forEach((item) => {
  item.addEventListener("click", (evt) => {
    const popup = evt.target;
    closePopup(popup);
  });
});

popupCloseButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//функция открытия мод окна
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

//функция закрытия мод окна
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

const closePopupByClickOnOverlay = (event) => {
  if (event.target != event.currentTarget) {
    return;
  }
  closePopup(event.currentTarget);
};

popupEditProfile.addEventListener("click", closePopupByClickOnOverlay);
cardPopup.addEventListener("click", closePopupByClickOnOverlay);
popupCardImage.addEventListener("click", closePopupByClickOnOverlay);

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupProffesion.value;
  closePopup(popupEditProfile);
}

popupInfo.addEventListener("submit", handleProfileFormSubmit);

profileOpenButton.addEventListener("click", () => {
  popupName.value = profileName.textContent;
  popupProffesion.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
});

popupOpenLinkButton.addEventListener("click", () => {
  openPopup(cardPopup);
});


export { clearForm };
*/



/**
 
/*
function clearForm(form) {
  form.reset();
}

const profileName = document.querySelector(".profile__name");
const profileSubtitle = document.querySelector(".profile__subtitle");
const popupInfo = document.querySelector(".popup__form");
const popupName = document.querySelector(".popup__input_edit_name");
const popupProffesion = document.querySelector(".popup__input_edit_about");
const popupEditProfile = document.querySelector(".popup_edit");
const cardPopup = document.querySelector(".popup_add_card");
const popupCloseButtons = document.querySelectorAll(".popup__close-button");
const profileOpenButton = document.querySelector(".profile__edit-button");
const popupOpenLinkButton = document.querySelector(".profile__add-button");
const popupCreateCardBtn = document.querySelector(".popup__create-btn");
const popupCardTitleInput = document.querySelector(".popup__input_add_place");
const popupCardLinkInput = document.querySelector(".popup__input_add_link");
const forms = document.querySelectorAll("form");
//
const photoCardList = document.querySelector(".elements");
const popupContainer = Array.from(
  document.querySelectorAll(".popup__container")
);
const popupList = Array.from(document.querySelector(".popup"));
//
const popupCardForm = document.querySelector(".form-place");
const popupCardImage = document.querySelector(".popup_card_image");
const popupCardImageUrl = popupCardImage.querySelector("img");
const popupCardImageTitle = popupCardImage.querySelector("figcaption");
//

const editForm = document.querySelector(".popup__edit-form");
const addForm = document.querySelector(".popup__add-form");

 */