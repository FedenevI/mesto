export default class Section {
    constructor({items, renderer}, selectorCont) {
        this._container = document.querySelector(selectorCont);
        this._initialCards = items;
        this.renderer = renderer; // публичный
    }

    addInitialCards() {
        this._initialCards.forEach(element => {
            this.addItem(this.renderer(element))
        })
    }

    addItem(elementNew) {
        this._container.prepend(elementNew);
    }
}