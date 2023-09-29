export default class Card { 
  constructor(data, templateSelector, handleCardClick) { 
    this._data = data;
    this._name = data.name; 
    this._link = data.link; 
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }
  
  _getTemplate() {
      return document
       .querySelector(this._templateSelector)
       .content.querySelector(".element")
       .cloneNode(true);
  }
  
  createCard() {
    this._element =  this._getTemplate();
    this._likeButton = this._element.querySelector(".element__like-but");
    this._trashButton = this._element.querySelector(".element__trash-button");
    this._image = this._element.querySelector(".element__img");
    this._title = this._element.querySelector(".element__title");
    this._initLikeBtn();
    this._initRemoveCard();
    this._initOnCardClick();
    this._image.alt = this._name;
    this._image.src = this._link;
    this._title.textContent = this._name;
    return this._element;
  }

  _likeBtn(){
    this._likeButton.classList.toggle("element__like_active");
  }

  _removeCard(){
    this._trashButton.closest(".element").remove();
    };

  _onCardClick() {
    this._handleCardClick(this._data);
    };

  _initLikeBtn() {
    this._likeButton.addEventListener('click', () => {
      this._likeBtn();
    });
  }

  _initRemoveCard() {
    this._trashButton.addEventListener('click', () => {
      this._removeCard();
    })
  }

  _initOnCardClick() {
    this._image.addEventListener("click", () => {
      this._onCardClick();
  });
  }
}



