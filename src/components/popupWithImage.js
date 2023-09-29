import Popup from "./Popup.js";

export default class popupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._popupImageContainer = this._popup.querySelector(".popup-image__container");
        this._popupImageName = this._popup.querySelector(".popup-image__name");
    }

    open = (data) => {
        this._popupImageContainer.src = data.link;
        this._popupImageName.textContent = data.name;
        this._popupImageName.alt = data.name;
        super.open()
    }
}