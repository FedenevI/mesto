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
const popupAvatarOpen = document.querySelector('.profile__avatar-button');
const cardsContent = document.querySelector(".elements");
const profileFormNameInputEdit = document.querySelector(".popup__input_type_name");
const profileFormJobInputEdit = document.querySelector(".popup__input_type_job");
const popupProfileForm = document.querySelector(".popup__form");
const popupCardForm = document.querySelector(".popup-card__form")
const popupAvatarForm = document.querySelector('.popup-avatar__form')
const popupDeleteForm =  document.querySelector('.popup-delete__form')
  
export {
   optionsValid, 
   popupProfileOpenButton, 
   popupCardOpen,
   cardsContent,
   profileFormNameInputEdit,
   profileFormJobInputEdit,
   popupAvatarOpen,
   popupProfileForm,
   popupCardForm,
   popupAvatarForm,
   popupDeleteForm
  };