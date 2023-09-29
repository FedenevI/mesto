export default class UserInfo {
    constructor({profileName, profileJob}) {
      this._userName = document.querySelector(profileName);
      this._userJob = document.querySelector(profileJob);
    }

    getUserInfo() {
        return {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        }
    }

    setUserInfo (name, job) {
        this._userName.textContent = name;
        this._userJob.textContent = job;
    }
}