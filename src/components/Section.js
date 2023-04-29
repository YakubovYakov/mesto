/**
 *  класс, который отвечает за отрисовку элементов на странице
 */

export default class Section {
	constructor({renderer}, containerSelector) {
		this._renderer = renderer;
		this._container = document.querySelector(containerSelector);
	}

	//--------- Метод, который отвечает за отрисовку всех элементов
	addItem(element) {
		this._container.prepend(element)
	}
	//--------- Метод, который принимает DOM-эл и добавляет его в containerSelector
	renderItems(items) {
		items.forEach(item => this._renderer(item));
	}

}
