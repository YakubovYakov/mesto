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

const popupCardForm = document.querySelector('.form-place');
const popupCardImage = document.querySelector(".popup_card_image")
const popupCardImageUrl = popupCardImage.querySelector("img");
const popupCardImageTitle = popupCardImage.querySelector("figcaption");

console.log(popupCardForm);

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardTemplate = document
  .querySelector("#element-template")
  .content.querySelector("article");
const cardList = document.querySelector(".elements");

function createCard(data) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = card.querySelector(".element__name");
  const cardLikeBtn = card.querySelector(".element__like");
  cardLikeBtn.addEventListener("click", () =>
    cardLikeBtn.classList.toggle("element__action_like")
  );
  const cardDeleteBtn = card.querySelector(".element__delete");
  const cardImg = card.querySelector("img");
  cardImg.addEventListener("click", () => {
    openPopup(popupCardImage)
    popupCardImageUrl.src = data.link;
    popupCardImageUrl.alt = data.name;
    popupCardImageTitle.textContent = data.name;
  });

  cardDeleteBtn.addEventListener("click", () => {
    card.remove();
  });

  cardTitle.textContent = data.name;
  cardImg.src = data.link;
  cardImg.alt = data.name;

  return card;
}

function renderCard(card) {
  cardList.prepend(createCard(card));
}

initialCards.forEach((card) => {
  renderCard(card);
});

// чистим форму
forms.forEach((form) => {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });
});

function clearForm(form) {
  form.reset();
}

// popupCreateCardBtn.addEventListener ()

popupCloseButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => {
    closePopup(popup);
  });
});

//функция открытия мод окна
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
//функция закрытия мод окна
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

//

function handleProfileFormSubmit(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupProffesion.value;
  closePopup(popupEditProfile);
}

function handleCardFormSubmit(evt) {
	evt.preventDefault();
	renderCard(createCard({
		name:popupCardTitleInput.value,
		link:popupCardLinkInput.value
	}))
	closePopup(cardPopup)

	clearForm(popupCardForm)
}

	popupCardForm.addEventListener('submit', handleCardFormSubmit) 

	popupInfo.addEventListener("submit", handleProfileFormSubmit);

profileOpenButton.addEventListener("click", () => {
  popupName.value = profileName.textContent;
  popupProffesion.value = profileSubtitle.textContent;
  openPopup(popupEditProfile);
});

popupOpenLinkButton.addEventListener("click", () => {
  openPopup(cardPopup);
});

const openPopupImg = document.querySelector(".popup_card_image");
const popupImg = document.querySelector(".popup__image");

// openPopupImg.addEventListener("click", () => {
//   openPopup(popupImg);
// });
