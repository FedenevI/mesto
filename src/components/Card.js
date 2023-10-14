export default class Card { 
    constructor(data, templateSelector, handleCardClick, openDeletePopup, addLikeFunc) { 
      // console.log(data)
      this._data = data;
      this._name = data.name; 
      this._link = data.link; 
      this._meID = data.meID;
      this._ownerID = data.owner._id;
      this._likes = data.likes;
      this._likesLength = data.likes.length;
      this._cardID = data._id;
      this._addLikeFunc = addLikeFunc;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
      this._openDeletePopup = openDeletePopup;
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
      this._counter = this._element.querySelector('.element__counter');
      this._image.alt = this._name;
      this._image.src = this._link;
      this._title.textContent = this._name;
      this._setEventListener();
      this._removeCardValidation();
      this._likeBtnMassive();
      return this._element;
    }
  
    _likeBtnMassive() {
      this._likes.forEach(element => {
        if (element._id === this._meID) {
          this._likeButton.classList.add("element__like_active")
          return
        }
      })
      this._counter.textContent = this._likesLength
    }
  
    _removeCardValidation() {
      this._meID === this._ownerID
        ? this._trashButton.style.display = "block"
        : this._trashButton.style.display = "none"
    }
    
    likeBtnToggle(likes) {
     this._likeButton.classList.toggle("element__like_active");
     this._counter.textContent = likes.length
    }
  
    _likeBtn(){
      this._addLikeFunc(this._likeButton, this._cardID)
    }
  
    removeCard() {
      this._trashButton.closest(".element").remove();
    }
    
    _removeCard(){
      this._openDeletePopup({card: this, cardID: this._cardID})
      };
  
    _onCardClick() {
      this._handleCardClick(this._data);
      };
  
    _setEventListener() {
      this._image.addEventListener("click", () => {
        this._onCardClick();
      });

      this._trashButton.addEventListener('click', () => {
        this._removeCard();
      })

      this._likeButton.addEventListener('click', () => {
        this._likeBtn();
      });
    }
  }
