// Class that creates an image

export default class ImageFactory {
	constructor(data) {
		this._id = data.id;
		this._photographerId = data.photographerId;
		this._title = data.title;
		this._image = data.image;
	}
	
	render() {
		return `
			
			<img src="../../assets/photographers/${this._photographerId}/${this._image}" class="galery-medias" data-mediaid="${this._id}" alt="${this._title}" tabindex="0" role="link">
		
                `;
	}
}
