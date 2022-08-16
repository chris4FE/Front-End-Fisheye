// Class that creates an image

export default class ImageFactory {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
    }

    render() {
        return (`<img class="galery-medias" data-mediaid="${this._photographerId}" 
        role="link" tabindex="0" 
        src="../../assets/photographers/${this._photographerId}/${this._image}" 
        alt="${this._title}"/>`);
    }
}
