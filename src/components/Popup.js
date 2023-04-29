/**
 * Класс, который отвечает за открытие и закрытие попапа
 */

export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = document.querySelector(popupSelector);
    this._buttonClose = this._popupSelector.querySelector(
      ".popup__close-button"
    );
    this._formList = Array.from(document.querySelectorAll(".popup"));
  }
  open() {
    this._popupSelector.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popupSelector.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };
	// -------- Метод,который добавляет слушатель клика иконке закрытия попапа.
	// -------- Модальное окно также закрывается при клике на оверлей

  setEventListeners() {
    this._buttonClose.addEventListener("click", () => {
      this.close();
    });
    this._popupSelector.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("popup_opened")) {
        this.close();
      }
      if (evt.target.classList.contains(".popup__close-button")) {
        this.close();
      }
    });
  }
}
