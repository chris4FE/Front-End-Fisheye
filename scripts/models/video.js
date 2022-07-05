// Class that create a video

export default class Video {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._date = data.date;
		this._title = data.title;
		this._video = data.video;
		this._likes = data.likes;
	}

	get id() {
		return this._id;
	}
	get photographerId() {
		return this._photographerId;
	}
	get date() {
		return this._date;
	}
	get title() {
		return this._title;
	}
	get source() {
		return `<figure class="media-card-image">
                    <a href="public/img/${this._photographerId}/${this._video}">
                        <video>
                            <source src="public/img/${this._photographerId}/${this._video}" type="video/mp4">
                        </video>
                    </a>
                </figure>`;
	}
	
}
