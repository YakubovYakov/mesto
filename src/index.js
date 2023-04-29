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
  formValidationConfig,
  profileOpenButton,
  popupOpenButton,
  editForm,
  addForm,
  profileOvarlay,
  popupChangeAvatar,
  popupName,
  popupProffesion,
  popupCardTitleInput,
  popupCardLinkInput,
} from "./utils/constants.js";
import "./pages/index.css";
import PopupWithConfirm from "./components/PopupWithConfirm.js";
// import { data } from "autoprefixer";
// import { config } from "webpack";

const api = new Api(
  "https://mesto.nomoreparties.co/v1",
  "2ceb7c58-7c31-4d20-a44d-d2bf37d02e88",
  "cohort-64"
);

const validatorEditForm = new FormValidator(formValidationConfig, editForm);
const validatorAddForm = new FormValidator(formValidationConfig, addForm);
const validatorChangeAvatar = new FormValidator(
  formValidationConfig,
  popupChangeAvatar
);
validatorEditForm.enableValidation();
validatorAddForm.enableValidation();
validatorChangeAvatar.enableValidation();

const popupWithConfirm = new PopupWithConfirm(
  ".popup_type_delete",
  confirmDeletingSubmitHandler
);
popupWithConfirm.setEventListeners();

// ----------- При нажатии ДА при удалении карточки
function confirmDeletingSubmitHandler(card) {
  const cardId = card.getCardId();
  api.deleteCard(cardId).then(() => {
    card.deleteCardElement();
    popupWithConfirm.close();
  });
}

// ----------- При нажатии на корзинку
function handleDeleteCard(cardElement) {
  popupWithConfirm.open(cardElement);
}

function handleLikeCard(cardElement) {
  const cardId = cardElement.getCardId();
  const isLiked = cardElement.getIsLiked();
  api.likeCard(cardId, isLiked).then((response) => {
    console.log(response.likes);
    cardElement.updateLikes(response.likes);
  });
}

// ----------- Создание карточки
function createCard(cardData) {
  const myId = userInfo.getUserId();
  const newCard = new Card(
    cardData,
    handleCardImage,
    "#element-template",
    handleDeleteCard,
    myId,
    handleLikeCard
  ); // Создаем экземпляр карточки
  return newCard.generateCard(); // Возвращаем наполненную каарточку
}

// ---------- При клике на изображение карточки
function handleCardImage(title, link) {
  popupImage.open(title, link);
}

// ---------- Отрисовка карточки
function renderCard(cardData) {
  const newCard = createCard(cardData); 
  cardList.addItem(newCard); // В элемент списка добавляем готовую карточку
}

// ---------- При добавлении новой карточки
function addCardSubmitHandler(inputValues) {
  popupWithAddForm.formLoading(true);
  api
    .addNewCard(inputValues)
    .then((newCard) => {
      renderCard(newCard);
      popupWithAddForm.close();
    })
    .finally(() => {
      popupWithAddForm.formLoading(false);
    });
  // Ренедерим карточку на основе данных inputValues
}

// ---------- Сабмит формы
function editProfileSubmitHandler(inputValues) {
  popupWithEditForm.formLoading(true);
  api
    .updateUserInfo({
      name: inputValues.name,
      about: inputValues.job,
    })
    .then((response) => {
      setUserData(response);
      popupWithEditForm.close();
    })
    .finally(() => {
      popupWithEditForm.formLoading(false);
    });
}

// ---------- Устанавливаем значения профиля
function setUserData(userData) {
  userInfo.setUserInfo(userData);
}

// ---------- Функция редактирования аватара
function handlePopupChangeAvatar(inputValues) {
  popupFormChangeAvatar.formLoading(true);
  api
    .changeAvatarUser({
      avatar: inputValues.link,
    })
    .then((response) => {
      setUserData(response);
      popupFormChangeAvatar.close();
    })
    .finally(() => {
      popupFormChangeAvatar.formLoading(false);
    });
}

// ---------- Создание экземпляра элемента для списка карточек
const cardList = new Section({ renderer: renderCard }, ".elements");

// ---------- Отрисовка начальных карточек
Promise.all([api.getCards(), api.getUserInfo()])
  .then(([cards, userInfo]) => {
    setUserData(userInfo);
    cardList.renderItems(cards.reverse());
  })
  .catch((error) => {
    console.error("ERROR");
  });

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

// ---------- Создание экземпляра модального окна редактирования аватара
const popupFormChangeAvatar = new PopupWithForm(
  ".popup_change_avatar",
  handlePopupChangeAvatar
);
popupFormChangeAvatar.setEventListeners();

const userInfo = new UserInfo(
  ".profile__name",
  ".profile__subtitle",
  ".profile__avatar"
);

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

profileOvarlay.addEventListener("click", () => {
  popupFormChangeAvatar.open();
  validatorChangeAvatar.resetValidation();
  validatorChangeAvatar._toggleButton();
});
