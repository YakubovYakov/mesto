export default class UserInfo {
	constructor({userName, job}) {
		this._name = document.querySelector(userName);
		this._job = document.querySelector(job);
	}
	getUserInfo() {
		return {
			name: this._name.textContent,
			job: this._job.textContent
		}


		/*const profileData = { 
		name: this._name.textContent,
		job: this._job.textContent
		}
		return profileData;*/

		// const userData = {
		// 	name: this._name.textContent,
		// 	job: this._job.textContent
		// }
		// return userData;
	}

	setUserInfo(name, job) {
		this._name.textContent = name;//[`input-user-name`];
		//console.log(userName, job);
		this._job.textContent = job;//[`input-edit-about`];
	}
}