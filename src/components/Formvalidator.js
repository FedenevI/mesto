export default class FormValidator {
  constructor(options, formElement) {
    this._options = options;
    this._formElement = formElement;
    this._inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
    this._buttonElement = formElement.querySelector(options.submitButtonSelector);
  }

  _toggleButtonState() {
    const hasInvalidInput = this._hasInvalidInput();
    this._buttonElement.classList.toggle(this._options.inactiveButtonClass, hasInvalidInput);
    this._buttonElement.disabled = hasInvalidInput ? true : false;
}

  _showError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._options.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._options.errorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._options.inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._options.errorClass);
  }

 _checkInputValidity(inputElement) {
    !inputElement.validity.valid
      ? this._showError(inputElement, inputElement.validationMessage)
      : this._hideError(inputElement);
}

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  resetValidation() {
    this._toggleButtonState(); 
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement) 
    });

  }
  _setEventListeners() {
    const toggleButtonAndCheckValidity = () => {
      this._toggleButtonState();
      this._inputList.forEach((inputElement) => {
        this._checkInputValidity(inputElement);
      });
    };

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", toggleButtonAndCheckValidity);
    });

    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
      this._toggleButtonState();
    });
    this._toggleButtonState();
    
    
  }


  enableValidation() {
    this._setEventListeners();
  } 
}

