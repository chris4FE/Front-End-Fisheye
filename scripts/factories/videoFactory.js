// Class that create a video

export default class VideoFactory {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._video = data.video;
	}

render() {
	return `
		
				<video>
					<source src="../../assets/photographers/${this._photographerId}/${this._video}" class="galery-medias" data-mediaid="${this._id} role="link" tabindex="0" type="video/mp4">
				</video>
		
			`;
	}
	
}
