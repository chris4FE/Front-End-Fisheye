// import {displayModal} from "../utils/contactForm.js";
// import {Photographer} from "../models/photographers.js";

// Displaying photographer's data on homepage
/**
 * 
 * @param {*} data 
 * @returns photographer's name, picture, index page card and photographer's page card
 */
export function photographerFactory(data) {
    const { name, id, portrait, city, country, tagline, price } = data;

    const picture = `./assets/photographers/${portrait}`;

    /**
     * 
     * @returns index page info card
     */

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

    // function getUserCardDOM() {

    //     constructor(photographer) {this._photographer = Photographer}
    
    //             function createCard() {
    //             const card = document.createElement('article');
    //             card.classList.add('photographer_card');
        
    //             card.innerHTML = `
    //             <a href="photographer.html?id=${this._photographer.id}">
    //             <img class="photographer_card_image" src="./assets/photographers/${this._photographer.portrait}" alt="${this._photographer.name}">
    //             <h2 class="photographer_card_name">${this._photographer.name}</h2>
    //             <p class="photographer_card_location">${this._photographer.location}</p>
    //             <p class="photographer_card_tagline">${this._photographer.tagline}</p>
    //             <p class="photographer_card_price">${this._photographer.price}€/jour</p>
    //         </a>
    //             `

    //         return card;
    //     }
    // }

    /**
     * 
     * @returns photographer's page info card
     */
    function getUserCardPageDOM() {
    
        let contactContainer = document.createElement('div');
        contactContainer.classList.add('photographer-page-card-container');

        // return (`
        
        // <div class="photographer-page-card-container">
        //     <div class="photographer_card_info_wrap">
        //         <h2 class="photographer_card_name">${name}</h2>
        //         <p class="photographer_card_location">${city + ', ' + country}</p>
        //         <p class="photographer_card_tagline">${tagline}</p>
        //     </div>
        //     <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        //     <img class="photographer_card_image" src="./assets/photographers/${portrait}" alt="${name}">
        // </div>

        // `)

        contactContainer.innerHTML = `
        
        <div class="photographer_card_info_wrap">
            <h2 class="photographer_card_name">${name}</h2>
            <p class="photographer_card_location">${city + ', ' + country}</p>
            <p class="photographer_card_tagline">${tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img class="photographer_card_image" src="./assets/photographers/${portrait}" alt="${name}">

        `;

    
        // const h2Contact = document.createElement( 'h2' );
        // h2Contact.textContent = name;
    
        // const locationContact = document.createElement( 'p' );
        // locationContact.classList.add('location');
        // locationContact.textContent = [city + ', ' + country];
    
        // const taglineTextContact = document.createElement( 'p' );
        // taglineTextContact.classList.add('tagline');
        // taglineTextContact.textContent = tagline;

        //  // Contact button
        //  const contactBtn = document.createElement("button");
        //  contactBtn.classList.add("contact_button");
        //  contactBtn.setAttribute("onclick", "displayModal()");
        //  contactBtn.setAttribute("aria-label", "Contactez-moi");
        //  contactBtn.textContent = "Contactez-moi";
    
        // const imgContact = document.createElement( 'img' );
        // imgContact.setAttribute("src", picture);
        // imgContact.setAttribute('loading', 'lazy')

       
    
        // contactWrapperDiv.appendChild(h2Contact);
        // contactWrapperDiv.appendChild(locationContact);
        // contactWrapperDiv.appendChild(taglineTextContact);
        // contactContainer.appendChild(contactWrapperDiv);
        // contactContainer.appendChild(contactBtn);
        // contactContainer.appendChild(imgContact);
    
        return contactContainer;
    
    
    }

    function getUserContactDOM() {
        const contactName = document.createElement('span');
        contactName.textContent = name;
        return contactName;
    }

    return { name, picture, getUserCardDOM, getUserCardPageDOM, getUserContactDOM }
    
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

