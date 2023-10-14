import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {
  optionsValid, 
  popupProfileOpenButton, 
  popupCardOpen,
  profileFormNameInputEdit,
  profileFormJobInputEdit,
  popupAvatarOpen,
  popupProfileForm,
  popupCardForm,
  popupAvatarForm,
  popupDeleteForm
  } from '../script/constant.js';
import PopupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import Api from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-77',
  headers: {
    authorization: '980f7983-d65e-4e45-9077-8ccb5ac74fe6',
    'Content-Type': 'application/json'
  }
}); 
let userId;
let userName;
let userJob;
let userAvatar;


const deletePopupCard = new PopupDeleteCard('.popup-delete', ({card, cardID}) => {
  api.deleteCardID(cardID)
  .then(() => {
    card.removeCard();
    deletePopupCard.close();
  })
  .catch(error => console.error(`Ошибка при попытке удалить карточку ${error}`))
  .finally(() => deletePopupCard.submitBtn.textContent = 'да')
});
deletePopupCard.setEventListeners();

const openImage = new PopupWithImage('.popup-image');
openImage.setEventListeners();

const section = new Section ((card)=> {
  section.addItemAppend(createCard(card))
}, '.elements');

const userInfo = new UserInfo({
  profileName: '.profile__title',
  profileJob: '.profile__subtitle',
  profileAvatar: '.profile__avatar'
});

const popUpProfile = new PopupWithForm ('.popup-profile', (DataProfile) => {
  api.setInfoProfile(DataProfile)
  .then(res => {
    userInfo.setUserInfo({name: res.name, job: res.about, ava: res.avatar});
    popUpProfile.close();
  })
  .catch(error => console.error(`Ошибка при попытке редактировать профиль ${error}`))
  .finally(() => popUpProfile.submitBtn.textContent = 'Сохранить')
});

popUpProfile.setEventListeners();

const popUpCard = new PopupWithForm ('.popup-card', (data) => {
  Promise.all([api.addNewCard(data)])
   .then(([dataCard]) => {
      dataCard.meID = userId;
      section.addItemPrepend(createCard(dataCard));
      popUpCard.close()
   })
   .catch(error => console.error(`Ошибка при попытке добавить карточку ${error}`))
   .finally(() => popUpCard.submitBtn.textContent = 'Сохранить')
});
popUpCard.setEventListeners();

const popUpAvatar = new PopupWithForm('.popup-avatar', (dataAva) => {
  api.setInfoAvatar(dataAva)
    .then(res => {
      userInfo.setUserInfo({name: res.name, job: res.about, ava: res.avatar});
      popUpAvatar.close();
    })
    .catch(error => console.error(`Ошибка при попытке редактировать аватар ${error}`))
    .finally(() => popUpAvatar.submitBtn.textContent = 'Сохранить')
})
popUpAvatar.setEventListeners();

function createCard(cardNew) {
 const card = new Card(cardNew, "#place-template", openImage.open, deletePopupCard.open, (likeElement, cardID) => {
    if(likeElement.classList.contains("element__like_active")) {
      api.deleteLike(cardID)
      .then(res => {
        card.likeBtnToggle(res.likes)
      })
      .catch(error => console.error(`Ошибка при снятии лайка ${error}`))
    } else {
      api.addLike(cardID)
      .then(res => {
        card.likeBtnToggle(res.likes)
      })
      .catch(error => console.error(`Ошибка при добавлении лайка ${error}`))
    }
  });
  return card.createCard();
}

popupAvatarOpen.addEventListener('click', () => {
  formvalidatorAvatar.resetValidation();
  popUpAvatar.open()
});
popupCardOpen.addEventListener("click", () => {formValidatorCard.resetValidation(), popUpCard.open()});
popupProfileOpenButton.addEventListener("click", () => {
  formValidatorProfile.resetValidation();
  const infoObject = userInfo.getUserInfo();
  profileFormNameInputEdit.value = infoObject.name;
  profileFormJobInputEdit.value = infoObject.job;
  popUpProfile.open();
});

const formValidatorProfile = new FormValidator(optionsValid, popupProfileForm);
const formValidatorCard = new FormValidator(optionsValid, popupCardForm);
const formvalidatorAvatar = new FormValidator(optionsValid, popupAvatarForm);
const formvalidatorDelete = new FormValidator(optionsValid, popupDeleteForm);

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();
formvalidatorAvatar.enableValidation();
formvalidatorDelete.enableValidation();

Promise.all([api.getInfo(), api.getCards()])
  .then(([dataUser, dataCard]) => {
    userId = dataUser._id;
    userName = dataUser.name;
    userJob = dataUser.about;
    userAvatar = dataUser.avatar;  
    dataCard.forEach(element => element.meID = userId);
    userInfo.setUserInfo({name: userName, job: userJob, ava: userAvatar});
    section.addInitialCards(dataCard);
    console.log(dataCard)
  })
  .catch(error => console.error(`Ошибка при попытке загрузить карточки ${error}`))
