// import ImageFactory from "./imageFactory.js";
// import VideoFactory from "./videoFactory.js";


// export function galeryFactory(data) {
//     const { id, photographerId, title, image, video, likes, date, price } = data;

//     let mediaSrc = `../../assets/photographers/${photographerId}/`;
//     if (image) {
//         mediaSrc += image;
//     } else {
//         mediaSrc += video;
//     }

//     function getUserGaleryDOM() {
//         /** media FIGURE container element */
//         const figureGalery = document.createElement("figure");
//         figureGalery.classList.add("media-figure");
//         figureGalery.setAttribute("id", "figure-" + id);
//         figureGalery.setAttribute("aria-label", "carte du média " + title);
    
//         /** media caption - titles and likes */
//         const legendGalery = document.createElement("figcaption");
    
//         /** media titles */
//         const legendTitle = document.createElement("span");
//         legendTitle.classList.add("legend-title");
//         legendTitle.textContent = title;
    
//         /** media likes */
//         const legendLike = document.createElement("div");
//         legendLike.classList.add("legend-like");
//         legendLike.setAttribute("tabindex", 0);
    
//         /** Likes input field */
//         const likeInput = document.createElement("input");
//         likeInput.setAttribute("type", "checkbox");
//         likeInput.setAttribute("id", id);
//         likeInput.classList.add("like-input");
//         likeInput.setAttribute("role", "img");
//         likeInput.setAttribute("aria-label", "likes");
//         likeInput.setAttribute("tabindex", -1);
        
    
//         /** Likes label */
//         const likeLabel = document.createElement("label");
//         likeLabel.setAttribute("for", id);
//         likeLabel.classList.add("like-label");
//         likeLabel.textContent = likes + " ";
//         likeLabel.style.cursor = "pointer";

    
//         /** MEDIAS - video or image */
//         if (image) {
//           const imgPhoto = document.createElement("img");
//           imgPhoto.classList.add("galery-medias");
//           imgPhoto.setAttribute("src", mediaSrc);
//           imgPhoto.setAttribute("data-mediaid", id);
//           imgPhoto.setAttribute("alt", title);
//           imgPhoto.setAttribute("role", "link");
//           imgPhoto.setAttribute("tabindex", 0);
//           imgPhoto.style.cursor = "pointer";
//           figureGalery.appendChild(imgPhoto);
//         } else {
//           const vidPhoto = document.createElement("video");
//           vidPhoto.classList.add("galery-medias");
//           vidPhoto.setAttribute("type", "video/mp4");
//           vidPhoto.setAttribute("src", mediaSrc);
//           vidPhoto.setAttribute("data-mediaid", id);
//           vidPhoto.setAttribute("alt", title);
//           vidPhoto.setAttribute("role", "link");
//           vidPhoto.setAttribute("tabindex", 0);
//           vidPhoto.style.cursor = "pointer";
//         figureGalery.appendChild(vidPhoto);
//         }
    
//         figureGalery.appendChild(legendGalery);
//         legendGalery.appendChild(legendTitle);
//         legendGalery.appendChild(legendLike);
//         legendLike.appendChild(likeInput);
//         legendLike.appendChild(likeLabel);
//         return figureGalery;
//       }

//       function getUserGaleryLightbox() {
//         /** create lightbox slider container */
//         const slidesContainer = document.createElement("div");
//         slidesContainer.classList.add("slides-container");
    
//         /** create lightbox slides */
//         const slides = document.createElement("figure");
//         slides.classList.add("slides");
//         slidesContainer.appendChild(slides);
    
//         /** MEDIAS - video or image */
//         const slideMedia = document.createElement("div");
//         slideMedia.setAttribute("id", "slide-media" + id);
//         slideMedia.classList.add("slide-media");
//         slides.appendChild(slideMedia);
//         if (image) {
//           const imgPhotoLightbox = document.createElement("img");
//           imgPhotoLightbox.setAttribute("src", mediaSrc);
//           imgPhotoLightbox.classList.add("lightbox-modal-media");
//           imgPhotoLightbox.setAttribute("alt", title + ", closeup view");
//           imgPhotoLightbox.setAttribute("tabindex", "-1");
//           slideMedia.appendChild(imgPhotoLightbox);
//         } else {
//           const vidPhotoLightbox = document.createElement("video");
//           vidPhotoLightbox.setAttribute("controls", "");
//           vidPhotoLightbox.setAttribute("src", mediaSrc);
//           vidPhotoLightbox.setAttribute("type", "video/mp4");
//           vidPhotoLightbox.setAttribute("preload", "metadata");
//           vidPhotoLightbox.classList.add("lightbox-modal-media");
//           vidPhotoLightbox.setAttribute("aria-label", title + ", closeup view");
//           vidPhotoLightbox.setAttribute("tabindex", "-1");
//           slideMedia.appendChild(vidPhotoLightbox);
//         }
    
//         /** media lightbox caption */
//         const lightboxLegendTitle = document.createElement("figcaption");
//         const titlePhoto = document.createElement("h4");
//         titlePhoto.setAttribute("id", "title-photo");
//         titlePhoto.textContent = title;
    
//         slides.appendChild(lightboxLegendTitle);
//         lightboxLegendTitle.appendChild(titlePhoto);
//         return slidesContainer;
//       }


//     return { id, photographerId, title, image, video, likes, date, price, mediaSrc, getUserGaleryDOM, getUserGaleryLightbox };
// }



import ImageFactory from "./image.js";
import MediaFactory from "./MediaFactory.js";
import VideoFactory from "./video.js";



export function galeryFactory(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    let mediaSrc = `../../assets/photographers/${photographerId}/`;
    if (image) {
        mediaSrc += image;
    } else {
        mediaSrc += video;
    }


    // function getUserGalleryDOM() {
    //     const galleryCard = document.createElement("article");
    //     galleryCard.classList.add('media-card');

    //     galleryCard.innerHTML = `

    //     <img src="./assets/photographers/${mediaSrc}" alt="" class="media">
    //     <div class="media-info">
    //     <h2 class="media-title">${title}</h2>
    //     <div class="likes-section">
    //         <span class="likes-counter">${likes}</span>
    //         <i class="fa-solid fa-heart"></i>
    //     </div>
    //     </div>

    //     `
    //     // creer class mediaFactory qui aura comme params le media que je souhaite creer 
    //     // puis elle va tester est ce que le media est de type image, si oui retourner instance de la class images
    //     // si non video
    //     // objet retourne devra etre insere au niveau de l innerhtml

        
    //   return galleryCard;

    // }

    function getUserGaleryDOM() {
        /** media FIGURE container element */
        const figureGalery = document.createElement("figure");
        figureGalery.classList.add("media-figure");
        figureGalery.setAttribute("id", "figure-" + id);
        figureGalery.setAttribute("aria-label", "carte du média " + title);
    
        /** media caption - titles and likes */
        const legendGalery = document.createElement("figcaption");
    
        /** media titles */
        const legendTitle = document.createElement("span");
        legendTitle.classList.add("legend-title");
        legendTitle.textContent = title;
    
        /** media likes */
        const legendLike = document.createElement("div");
        legendLike.classList.add("legend-like");
    
        /** Likes input field */
        const likeInput = document.createElement("input");
        likeInput.setAttribute("type", "checkbox");
        likeInput.setAttribute("id", id);
        likeInput.classList.add("like-input");
        likeInput.setAttribute("role", "img");
        likeInput.setAttribute("aria-label", "likes");
        likeInput.setAttribute("tabindex", "0");
    
        /** Likes label */
        const likeLabel = document.createElement("label");
        likeLabel.setAttribute("for", id);
        likeLabel.classList.add("like-label");
        likeLabel.textContent = likes + " ";
    
        /** MEDIAS - video or image */
        let mediaFactory = new MediaFactory();
        let media = mediaFactory.create(data);
        let divContainer = document.createElement("div");
        divContainer.innerHTML = media.render();
        figureGalery.appendChild(divContainer);

         if (image) {
          let imgPhoto = new ImageFactory(data);
          // let divContainer = document.createElement("div");
          // divContainer.innerHTML = imgPhoto.render();
          // const imgPhoto = document.createElement("img");
          // imgPhoto.classList.add("galery-medias");
          // imgPhoto.setAttribute("src", mediaSrc);
          // imgPhoto.setAttribute("data-mediaid", id);
          // imgPhoto.setAttribute("alt", title + ", closeup view");
          // imgPhoto.setAttribute("role", "link");
          // imgPhoto.setAttribute("tabindex", 0);
          // figureGalery.appendChild(imgPhoto);
          // figureGalery.appendChild(divContainer);
        } else {
           const vidPhoto =new VideoFactory(data);
          //  let divContainer = document.createElement("div");
          //  divContainer.innerHTML = vidPhoto.render();
          // const vidPhoto = document.createElement("video");
          // vidPhoto.classList.add("galery-medias");
          // vidPhoto.setAttribute("type", "video/mp4");
          // vidPhoto.setAttribute("src", mediaSrc);
          // vidPhoto.setAttribute("data-mediaid", id);
          // vidPhoto.setAttribute("alt", title + ", closeup view");
          // vidPhoto.setAttribute("role", "link");
          // vidPhoto.setAttribute("tabindex", 0);
          // figureGalery.appendChild(vidPhoto);
          // figureGalery.appendChild(divContainer);
        } 
    
        figureGalery.appendChild(legendGalery);
        legendGalery.appendChild(legendTitle);
        legendGalery.appendChild(legendLike);
        legendLike.appendChild(likeInput);
        legendLike.appendChild(likeLabel);
        return figureGalery;
      }

      function getUserGaleryLightbox() {
        /** create lightbox slider container */
        const slidesContainer = document.createElement("div");
        slidesContainer.classList.add("slides-container");
    
        /** create lightbox slides */
        const slides = document.createElement("figure");
        slides.classList.add("slides");
        slidesContainer.appendChild(slides);
    
        /** MEDIAS - video or image */
        const slideMedia = document.createElement("div");
        slideMedia.setAttribute("id", "slide-media" + id);
        slideMedia.classList.add("slide-media");
        slides.appendChild(slideMedia);
        if (image) {
          const imgPhotoLightbox = document.createElement("img");
          imgPhotoLightbox.setAttribute("src", mediaSrc);
          imgPhotoLightbox.classList.add("lightbox-modal-media");
          imgPhotoLightbox.setAttribute("alt", "");
          imgPhotoLightbox.setAttribute("tabindex", "1");
          slideMedia.appendChild(imgPhotoLightbox);
        } else {
          const vidPhotoLightbox = document.createElement("video");
          vidPhotoLightbox.setAttribute("controls", "");
          vidPhotoLightbox.setAttribute("src", mediaSrc);
          vidPhotoLightbox.setAttribute("type", "video/mp4");
          vidPhotoLightbox.setAttribute("preload", "metadata");
          vidPhotoLightbox.classList.add("lightbox-modal-media");
          vidPhotoLightbox.setAttribute("aria-label", title);
          vidPhotoLightbox.setAttribute("tabindex", "1");
          slideMedia.appendChild(vidPhotoLightbox);
        }
    
        /** media lightbox caption */
        const lightboxLegendTitle = document.createElement("figcaption");
        const titlePhoto = document.createElement("h4");
        titlePhoto.setAttribute("id", "title-photo");
        titlePhoto.textContent = title;
    
        slides.appendChild(lightboxLegendTitle);
        lightboxLegendTitle.appendChild(titlePhoto);
        return slidesContainer;
      }


    return { id, photographerId, title, image, video, likes, date, price, mediaSrc, getUserGaleryDOM, getUserGaleryLightbox };
}

