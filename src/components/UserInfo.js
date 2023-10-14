export default class UserInfo {
    constructor({profileName, profileJob, profileAvatar}) {
      this._userName = document.querySelector(profileName);
      this._userJob = document.querySelector(profileJob);
      this._userAvatar = document.querySelector(profileAvatar);
    }

    getUserInfo() {
        return  {
            name: this._userName.textContent,
            job: this._userJob.textContent,
        }
    }

    setUserInfo ({name, job, ava}) {
        this._userAvatar.src = ava;
        this._userName.textContent = name;
        this._userJob.textContent = job;
    }
}