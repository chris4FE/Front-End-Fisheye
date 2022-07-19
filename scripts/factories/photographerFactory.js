// import {displayModal} from "../utils/contactForm.js";
// import {Photographer} from "../models/photographers.js";

// Displaying photographer's data on homepage
/**
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

    

    /**
     * 
     * @returns photographer's page info card
     */
    function getUserCardPageDOM() {
    
        let contactContainer = document.createElement('div');
        contactContainer.classList.add('photographer-page-card-container');


        contactContainer.innerHTML = `
        
        <div class="photographer_card_info_wrap">
            <h2 class="photographer_card_name">${name}</h2>
            <p class="photographer_card_location">${city + ', ' + country}</p>
            <p class="photographer_card_tagline">${tagline}</p>
        </div>
        <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
        <img class="photographer_card_image" src="./assets/photographers/${portrait}" alt="${name}">

        `;

    
        return contactContainer;
    
    
    }

    function getUserContactDOM() {
        const contactName = document.createElement('span');
        contactName.textContent = name;
        return contactName;
    }

    /**
     * Display side widget with total likes and photographer pricing
     * @returns counter widget
     */
    function getUserCounterDOM() {
        const asideWidget = document.createElement("aside");
        const counterLikes = document.createElement("div");

        /** Like Counter */
        const counterLikesDisplay = document.createElement("span");
        counterLikesDisplay.classList.add("counter-likes");
        const likeHeart = document.createElement("i");
        likeHeart.classList.add("fas", "fa-heart");
        likeHeart.setAttribute("alt", "");
        likeHeart.setAttribute("role", "img");

        /** Photographer pricing */
        const priceWidget = document.createElement("div");
        const h5Widget = document.createElement("h5");
        h5Widget.textContent = price + "€/jour";

        asideWidget.appendChild(counterLikes);
        counterLikes.appendChild(counterLikesDisplay);
        counterLikes.appendChild(likeHeart);
        asideWidget.appendChild(priceWidget);
        priceWidget.appendChild(h5Widget);
        return asideWidget;
    }


    return { name, picture, getUserCardDOM, getUserCardPageDOM, getUserContactDOM, getUserCounterDOM }

} 






