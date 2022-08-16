// Class that create a video

export default class VideoFactory {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._video = data.video;
	}

render() {
 

    let vidPhoto = document.createElement("video");
          vidPhoto.classList.add("galery-medias");
          vidPhoto.setAttribute("type", "video/mp4");
          vidPhoto.setAttribute("src", `../../assets/photographers/${this._photographerId}/${this._video}`);
          vidPhoto.setAttribute("data-mediaid", this._photographerId);
          vidPhoto.setAttribute("alt", this._title);
          vidPhoto.setAttribute("role", "link");
          vidPhoto.setAttribute("tabindex", 0);
          vidPhoto.style.cursor = "pointer";

    return vidPhoto;

	}

	
}
