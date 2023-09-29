import '../pages/index.css';
import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {initialCards,
  optionsValid, 
  popupProfileOpenButton, 
  popupCardOpen,
  cardsContent,
  profileFormNameInputEdit,
  profileFormJobInputEdit,
  name,
  job} from '../script/constant.js';
import popupWithImage from '../components/PopupWithImage.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';

const popupImage = new popupWithImage('.popup-image');
popupImage.setEventListeners();

const section = new Section({
  items: initialCards,
  renderer: (card) => createCard(card)
}, '.elements')
section.addInitialCards();

const userInfo = new UserInfo({
  profileName: '.profile__title',
  profileJob: '.profile__subtitle'
});

const popUpProfile = new PopupWithForm ('.popup-profile', (DataProfile) => {
  userInfo.setUserInfo(DataProfile.title, DataProfile.subtitle)
});
popUpProfile.setEventListeners();

const popUpCard = new PopupWithForm ('.popup-card', (DataCard) => {
    const card = {
    name: DataCard.placeName,
    link: DataCard.placeSrc,
  };
  prependCard(createCard(card));
});
popUpCard.setEventListeners();

function createCard(card) {
  return new Card(card, "#place-template", popupImage.open).createCard();
}

function prependCard(cardElement) {
  cardsContent.prepend(cardElement);
}

popupCardOpen.addEventListener("click", () => popUpCard.open());

popupProfileOpenButton.addEventListener("click", () => {
    profileFormNameInputEdit.value = name.textContent;
    profileFormJobInputEdit.value = job.textContent;
    popUpProfile.open();
});

const formValidatorProfile = new FormValidator(optionsValid, document.querySelector(".popup__form"));
const formValidatorCard = new FormValidator(optionsValid, document.querySelector(".popup-card__form"));

formValidatorProfile.enableValidation();
formValidatorCard.enableValidation();


