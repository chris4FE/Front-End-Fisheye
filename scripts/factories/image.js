// Class that creates an image

export default class ImageFactory {
    constructor(data) {
        this._id = data.id;
        this._photographerId = data.photographerId;
        this._title = data.title;
        this._image = data.image;
    }

    render() {
        
        let imgPhoto = document.createElement("img");
          imgPhoto.classList.add("galery-medias");
          imgPhoto.setAttribute("src", `../../assets/photographers/${this._photographerId}/${this._image}`);
          imgPhoto.setAttribute("data-mediaid", this._photographerId);
          imgPhoto.setAttribute("alt", this._title);
          imgPhoto.setAttribute("role", "link");
          imgPhoto.setAttribute("tabindex", 0);
          imgPhoto.style.cursor = "pointer";
          
    return imgPhoto;

    }
}
