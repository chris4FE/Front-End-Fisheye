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
		
				<video class="galery-medias" data-mediaid="${this._photographerId}" type="video/mp4"
                role="link" tabindex="0" 
                src="../../assets/photographers/${this._photographerId}/${this._video}"/>
				
		
			`;
	}
	
}
