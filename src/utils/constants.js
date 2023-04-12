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
  buttonDisabled: "popup__button_disabled",
};

const profileOpenButton = document.querySelector(".profile__edit-button");
const popupOpenButton = document.querySelector(".profile__add-button");
const editForm = document.querySelector(".popup__edit-form");
const addForm = document.querySelector(".popup__add-form");
const popupCardTitleInput = document.querySelector(".popup__input_add_place");
const popupCardLinkInput = document.querySelector(".popup__input_add_link");

const popupName = document.querySelector(".popup__input_edit_name");
const popupProffesion = document.querySelector(".popup__input_edit_about");

export {
  initialCards,
  formValidationConfig,
  profileOpenButton,
  popupOpenButton,
  editForm,
  addForm,
  popupName,
  popupProffesion,
  popupCardTitleInput,
  popupCardLinkInput,
};
