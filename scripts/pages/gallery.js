import {galeryFactory} from "../factories/galleryFactory.js";
import {sortMediaByDate} from "../utils/listbox.js";
import {sortMediaByLikes} from "../utils/listbox.js";
import {sortMediaByTitle} from "../utils/listbox.js";
import Lightbox from "../utils/lightbox.js";
import {openLightbox} from "../utils/lightbox.js";



/** fetch data from json file */
let medias; 
async function getMedias() {
  

  await fetch("../../data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));

  return ({
    medias: [...medias],
  })
};

/** fetch data and transform ID in number */
function getPhotographerId() {
  let searchParam = new URLSearchParams(window.location.search);
  let id = parseInt(searchParam.get("id"));
  console.log(id);
  return id;
}

/** display gallery medias on photographer page */
export function photographGaleryDisplay() {
  const mediasFilter = medias.filter(
    (media) => media.photographerId === parseInt(getPhotographerId())
  ); /** filters media by comparing photographer id with id in html page URL */

  const itemsSort = document.querySelector(".listbox-custom-new").textContent; /** targets sorting button */

  /** select function to use depending on sorting type */
  function selectSort(itemSort) {
    if (itemSort === "Date") {
      return sortMediaByDate;
    } else if (itemSort === "Popularité") {
      return sortMediaByLikes; 
    } else {
      return sortMediaByTitle; 
    }
  }

  /** Filtered and sorted medias */
  mediasFilter.sort(
    selectSort(itemsSort)
  ); /** sort items after theyve been filtered by photographer */

  const photographGalery = document.querySelector(".photographer-work");
  const photographLightbox = document.getElementById("lightbox-container");

  photographGalery.innerHTML = ""; /** empties gallery */
  photographLightbox.innerHTML = ""; /** empties carousel */

  mediasFilter.forEach((media) => {
    if (mediasFilter.indexOf()) {
      const photographerModelGalery =
        galeryFactory(media); /** fetch media data of photographer */
      const userGalery =
        photographerModelGalery.getUserGaleryDOM(); /** create media card in gallery */
      photographGalery.appendChild(userGalery);

      const photographerModelGaleryPhoto = galeryFactory(media);
      const userGaleryPhoto =
        photographerModelGaleryPhoto.getUserGaleryLightbox(); /** create media card inside carousel */
      photographLightbox.appendChild(userGaleryPhoto);
    }
  });

  const mediasLightbox = document.querySelectorAll(".galery-medias");

  /** addeventlisteners to open media in carousel */
  for (let i = 0; i < mediasLightbox.length; i++) {
    mediasLightbox[i].addEventListener("click", () => {
      new Lightbox(
        i,
        mediasLightbox.length
      ); /** create carousel depending on media clicked  dependign on its index and amount of media for carousel length */
      openLightbox(); /** open carousel */
    });
    mediasLightbox[i].addEventListener("keydown", (e) => {
      /** create carousel depending on media selected by hitting ENTER key */
      if (e.key === "Enter") {
        new Lightbox(i + 1, mediasLightbox.length);
        openLightbox();
      }
    });
  }
  new Lightbox();
}

/** init gallery display on photographer page */
export async function initGalery() {
  const { medias } = await getMedias(); /** fetch media data before displaying */
  photographGaleryDisplay(medias); /** init displaying gallery */
}

initGalery();