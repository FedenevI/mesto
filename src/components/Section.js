export default class Section {
    constructor(renderer, selectorCont) {
        this._container = document.querySelector(selectorCont);
        this._renderer = renderer; 
    }

    addInitialCards(data) {
        data.forEach(element => {
            this._renderer(element)
        })
    }

    addItemPrepend(element) {
        this._container.prepend(element);
    }

    addItemAppend(element) {
        this._container.append(element);
    }
}