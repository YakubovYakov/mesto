let profileName = document.querySelector(".profile__name");
let profileSubtitle = document.querySelector(".profile__subtitle");
//let popupInfo = document.querySelector('.popup__form');
let popupName = document.querySelector(".popup__edit-name");
let popupProffesion = document.querySelector(".popup__edit-about");

const popupElement = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");
const popupOpenButton = document.querySelector(".profile__edit-button");

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

popupOpenButton.addEventListener("click", () => {
  openPopup(popupElement);
});

popupCloseButton.addEventListener("click", () => {
  closePopup(popupElement);
});

//
let popupInfo = document.querySelector(".popup__form");

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value;
  profileSubtitle.textContent = popupProffesion.value;
}

function closeSubmit() {
  popup.classList.remove(".popup_opened");
}
popupInfo.addEventListener("submit", formSubmitHandler);
