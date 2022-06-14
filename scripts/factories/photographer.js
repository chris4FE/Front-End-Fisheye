// Displaying photographer's data on homepage

function photographerFactory(data) {
    const { name, portrait, city, country, tagline, price } = data;

    const picture = `./assets/photographers/${portrait}`;

    function getUserCardDOM() {
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
        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(location);
        article.appendChild(taglineText);
        article.appendChild(pricing);

        return (article);
    }
    return { name, picture, getUserCardDOM }
} 

// Displaying data on single photographers' page

function getPhotographersId() {
    // fetch photographers' ID
    return parseInt(new URLSearchParams(window.location.search).get('id'));
    console.log('all good');
}

// display photographers' info

function displayPhotographerInfo() {
    
    const photographerInfoContainer = document.querySelector('.photograph-header');
    const what = document.createElement( 'h2' );
    what.textContent = 'YOWASSUP';
    photographerInfoContainer.appendChild(what);


}

