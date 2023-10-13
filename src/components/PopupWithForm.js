import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitFunc) {
      super(popupSelector);
      this._submitFunc = submitFunc;
      this._form = this._popup.querySelector('.popup__form');
      this._input = this._form.querySelectorAll('.popup__input');
      this.submitBtn = this._form.querySelector('.popup__save-button');
    }

    close() {
      super.close();
      this._form.reset();
    }

    setEventListeners() {
      super.setEventListeners();
      this._form.addEventListener('submit', (event) => {
        event.preventDefault();
        this.submitBtn.textContent = `${this.submitBtn.textContent}...`;
        this._submitFunc(this._getInputValues());
      })
    }
    
    _getInputValues() {
      this._formValues = {};
      this._input.forEach((input) => {
        this._formValues[input.name] = input.value;
      })
      return this._formValues;
    }
}