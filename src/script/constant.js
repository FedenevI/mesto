const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    },
];

const optionsValid =     {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  };

const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupCardOpen = document.querySelector(".profile__add-button");
const cardsContent = document.querySelector(".elements");
const profileFormNameInputEdit = document.querySelector(".popup__input_type_name");
const profileFormJobInputEdit = document.querySelector(".popup__input_type_job");
const name = document.querySelector(".profile__title");
const job = document.querySelector(".profile__subtitle");
  
export {initialCards,
   optionsValid, 
   popupProfileOpenButton, 
   popupCardOpen,
   cardsContent,
   profileFormNameInputEdit,
   profileFormJobInputEdit,
   name,
   job};