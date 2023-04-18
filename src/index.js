import Card from "../src/components/Card.js";
import FormValidator from "../src/components/FormValidator.js";
import Section from "../src/components/Section.js";
import Popup from "../src/components/Popup.js";
import { PopupWithImage } from "../src/components/PopupWithImage.js";
import PopupWithForm from "../src/components/PopupWithForm.js";
import UserInfo from "../src/components/UserInfo.js";
import Api from "../src/components/Api.js";

import {
  initialCards,
  //formValidationConfig,
  profileOpenButton,
  popupOpenButton,
  editForm,
  addForm,
  popupName,
  popupProffesion,
  popupCardTitleInput,
  popupCardLinkInput,
} from "./utils/constants.js";
import "./pages/index.css";
import { data } from "autoprefixer";
import { config } from "webpack";

const validatorEditForm = new FormValidator(formValidationConfig, editForm);
const validatorAddForm = new FormValidator(formValidationConfig, addForm);
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();

// ----------- Создание экземпляра API для получения карточек
// const api = new Api ("'https://mesto.nomoreparties.co/v1/cohort-64", {
// 	authorization: "2ceb7c58-7c31-4d20-a44d-d2bf37d02e88",
// 	"Content-Type": "application/json"
// });

// ----------- Создание карточки
function createCard(cardData) {
  const newCard = new Card(cardData, handleCardImage, "#element-template"); // Создаем экземпляр карточки
  return newCard.generateCard(); // Возвращаем наполненную каарточку
}

// ---------- При клике на изображение карточки
function handleCardImage(title, link) {
  popupImage.open(title, link);
}

// ---------- Отрисовка карточки

function renderCard(cardData) {
  const newCard = createCard(cardData); // Создаем карточку и передаем туда данные {title, input}
  cardList.addItem(newCard); // В элемент списка добавляем готовую карточку
}

// ---------- При добавлении новой карточки
function addCardSubmitHandler(inputValues) {
  renderCard(inputValues); // Ренедерим карточку на основе данных inputValues
  popupWithAddForm.close();
}

function editProfileSubmitHandler(inputValues) {
  userInfo.setUserInfo(inputValues.name, inputValues.job);
  popupWithEditForm.close();
}

// ---------- Создание экземпляра элемента для списка карточек
const cardList = new Section({ renderer: renderCard }, ".elements");

// ---------- Отрисовка начальных карточек
cardList.renderItems(initialCards);

// ---------- Создание экземпляра модального окна добавления карточки
const popupWithAddForm = new PopupWithForm(
  ".popup_add_card",
  addCardSubmitHandler
);
popupWithAddForm.setEventListeners();

// ---------- Создание экземпляра модального окна превью изображения карточки
const popupImage = new PopupWithImage(".popup_card_image");
popupImage.setEventListeners();
// ---------- Создание экземпляра модального окна редактирования профиля

const popupWithEditForm = new PopupWithForm(
  ".popup_edit",
  editProfileSubmitHandler
);
popupWithEditForm.setEventListeners();

const userInfo = new UserInfo(".profile__name", ".profile__subtitle");
popupOpenButton.addEventListener("click", () => {
  popupWithAddForm.open();
  validatorAddForm.resetValidation();
  validatorAddForm._toggleButton();
});

profileOpenButton.addEventListener("click", () => {
  validatorEditForm.resetValidation();
  validatorEditForm._toggleButton();
  popupWithEditForm.open();
});
