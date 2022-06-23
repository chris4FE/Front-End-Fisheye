import {getPhotographers} from "../utils/api.js";

// Displaying photographer's data on homepage

export function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const lienPagePhotographe = document.createElement('a');
        lienPagePhotographe.setAttribute('href', './photographer.html?id=' + id);

        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        img.setAttribute('loading', 'lazy')

        const h2 = document.createElement( 'h2' );
        h2.textContent = name;

        const location = document.createElement( 'p' );
        location.textContent = [city + ', ' + country];

        const taglineText = document.createElement( 'p' );
        taglineText.classList.add('tagline');
        taglineText.textContent = tagline;

        const pricing = document.createElement( 'p' );
        pricing.classList.add('price');
        pricing.textContent = [price + '€/jour'];

        lienPagePhotographe.appendChild(article);
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineText);
        article.appendChild(pricing);

        return (lienPagePhotographe);
    }
    return { name, picture, getUserCardDOM }



    function getUserCardPageDOM() {
        const phototographerProfileContainer = document.querySelector('.photographer-header');
        const contactWrapper = phototographerProfileContainer.createElement('div');
    
        const h2Contact = document.createElement( 'h2' );
        h2Contact.textContent = name;
    
        const locationContact = document.createElement( 'p' );
        locationContact.textContent = [city + ', ' + country];
    
        const taglineTextContact = document.createElement( 'p' );
        taglineTextContact.classList.add('tagline');
        taglineTextContact.textContent = tagline;
    
        const imgContact = document.createElement( 'img' );
            imgContact.setAttribute("src", picture);
            imgContact.setAttribute('loading', 'lazy')
    
        phototographerProfileContainer.appendChild(contactWrapper);
        contactWrapper.appendChild(h2Contact);
        contactWrapper.appendChild(locationContact);
        contactWrapper.appendChild(taglineTextContact);
        phototographerProfileContainer.appendChild(imgContact);
    
        return phototographerProfileContainer;
    
    
    }
} 






// async function displayData(photographers) {
//     const photographerContactHeader = document.querySelector('.photographer-header');
//     const photographerClick = photographers.find(
//         (element) => element.id === parseInt(photographerId)
//     );

//     const photographerPageModel = photographerFactory(photographerClick);
//     const userProfileDOM = photographerPageModel(userProfileDOM.profile);

//     photographerContactHeader.appendChild(userProfileDOM.profile);
//     photographerContactHeader.appendChild(userProfileDOM.portrait);
     
// }

// async function displayMedia(photographers) {
//     const photographerWork = document.querySelector('.photographer-work');
//     const photographerClick = photographers.filter(
//         (element) => element.photographerId === parseInt(photographerPersonalId)
//         );
// }

// async function initPhotographer() {
//     const { photographers } = await getPhotographers();
//     displayData(photographers.photographers);
// }

// initPhotographer();

// display photographers' info

// function displayPhotographerInfo() {
    
//     const photographerInfoContainer = document.querySelector('.photograph-header');
//     const what = document.createElement( 'h2' );
//     what.textContent = 'YOWASSUP';
//     photographerInfoContainer.appendChild(what);


// }

