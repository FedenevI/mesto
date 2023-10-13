import Popup from "./Popup.js";

export default class PopupDeleteCard extends Popup {
    constructor(popupSelector, submitFunc) {
        super(popupSelector);
        this._submitFunc = submitFunc;
        this._form = this._popup.querySelector('.popup__form');
        this.submitBtn = this._form.querySelector('.popup__delete-button')
    }


    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('submit', (event) => {
            event.preventDefault();
            this.submitBtn.textContent = `${this.submitBtn.textContent}...`
            this._submitFunc({card: this._card, cardID: this._cardID});
        })
      }

    open = ({card, cardID}) => {
        super.open();
        this._card = card;
        this._cardID = cardID;
    }
}