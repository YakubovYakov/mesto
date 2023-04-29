/**
 * Класс отвечает за управление отображением 
 * информации о пользователе
 */

export default class UserInfo {
  constructor(selectorName, selectorJob, selectorAvatar) {
    this._name = document.querySelector(selectorName);
    this._job = document.querySelector(selectorJob);
		this._avatar = document.querySelector(selectorAvatar);
  }
	// --------- Метод возвращает объект с данными о пользователе
  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._job.textContent,
			avatar: this._avatar.src
    };
  }
	// --------- Метод, принимает новые данные пользователя и добавляет
	// их на страницу
  setUserInfo({name, about, avatar, _id}) {
		this._avatar.src = avatar;
    this._name.textContent = name;
    this._job.textContent = about;
		this.userId = _id;
  }

	getUserId() {
		return this.userId;
	}
}
