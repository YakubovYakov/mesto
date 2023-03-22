import { Card } from "./Card.js";
import FormValidator from "./FormValidator.js";

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

const formValidationConfig = {
  inputSelector: ".popup__input",
  errorClass: "popup__input_type_error",
  buttonSelector: ".popup__button",
  buttonDisabledClass: "popup__button_disabled",
};

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

const validatorEditForm = new FormValidator(formValidationConfig, editForm);
const validatorAddForm = new FormValidator(formValidationConfig, popupCardForm);
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();

initialCards.forEach((item) => {
  const card = createCard(item.name, item.link, "element-template");
  photoCardList.prepend(card);
});

function createCard(title, url, template) {
  const card = new Card(title, url, template);
  return card.generateCard();
}

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

export { popupCardImageUrl, popupCardImageTitle, openPopup, popupCardImage };
