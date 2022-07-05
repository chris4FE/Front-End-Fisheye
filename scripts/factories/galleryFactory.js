export function galleryFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    let mediaSrc = `./assets/photographers/${photographerId}/`;
    if (image) {
        mediaSrc += image;
    } else {
        mediaSrc += video;
    }


    function getUserGalleryDOM() {
        const galleryCard = document.createElement("article");
        galleryCard.classList.add('media-card');

        galleryCard.innerHTML = `

        <img src="./assets/photographers/${mediaSrc}" alt="" class="media">
        <div class="media-info">
        <h4 class="media-title">${title}</h4>
        <div class="likes-section">
            <span class="likes-counter">${likes}</span>
            <i class="fa-solid fa-heart"></i>
        </div>
        </div>

        `

        
      return galleryCard;

    }

    return { id, photographerId, title, image, video, likes, date, price, mediaSrc, getUserGalleryDOM};
}

// import Video from "../models/video.js";
// import Image from "../models/image.js";

// export default class MediaFactory {
// 	constructor(data) {
// 		if (data.video) return new Video(data);
// 		else if (data.image) return new Image(data);
// 		else throw "Erreur...";
// 	}
// }