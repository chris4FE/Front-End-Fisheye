import {galleryFactory} from "../factories/galleryFactory.js";


// fetch media data
const getMedias = async () => {
    await fetch("../../data/photographers.json")
      .then((res) => res.json())
      .then((data) => (medias = data.media));
  
    return {
      medias: [...medias],
    };
  };

  function getPhotographerId() {
    let searchParam = (new URLSearchParams(window.location.search));
    let id = parseInt(searchParam.get("id"));
    console.log(id);
    return id;
  }

//  display photographer gallery
function displayGallery() {
    const mediasFilter = medias.filter(
        (media) => media.photographerID === parseInt(getPhotographerId())
    );

    const itemsSort = document.querySelector(
        ".listbox-custom-new"
      ).textContent; /** Cible le texte du bouton de tri */
    
      /** ---------- Selectionne la fonction à utiliser selon la catégorie qui s'affiche  ---------- */
      function selectSort(itemSort) {
        if (itemSort === "Date") {
          /** Si le texte du bouton est égale à "Date" */
          return sortMediaByDate; /** Retourne le tri par dates */
        } else if (itemSort === "Popularité") {
          /** Sinon si le texte du bouton est égale à "Popularité" */
          return sortMediaByLikes; /** Retourne le tri par likes */
        } else {
          return sortMediaByTitle; /** Sinon retourne le tri par titres */
        }
      }
    
      /** ---------- Medias filtrés et triés  ---------- */
      mediasFilter.sort(
        selectSort(itemsSort)
      ); /** TRI dans les médias filtrés selon la selection de tri */
    
      const photographGalery = document.querySelector(".photographer-work");
    
      photographGalery.innerHTML = ""; /** Vide le DOM de la galerie */
    
      mediasFilter.forEach((media) => {
        if (mediasFilter.indexOf()) {
          const photographerModelGalery =
            galleryFactory(media); /** Récupération des données des médias du photographe ciblé */
          const userGalery =
            photographerModelGalery.getUserGalleryDOM(); /** Création de la carte du média dans la galerie du photographe */
          photographGalery.appendChild(userGalery); 
          
        }
      });
    
    
}

async function initGallery() {
    const { medias } = await getMedias(); /** Récupère les données des médias avant affichage */
    displayGallery(medias); /** Appel de la fonction d'affichage des données de la galerie */
  }

  initGallery;