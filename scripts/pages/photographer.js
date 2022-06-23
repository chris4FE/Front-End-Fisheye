import {photographerFactory} from "../factories/photographerFactory.js";

// Displaying data on single photographers' page

function getPhotographersId() {
    // fetch photographers' ID
    return parseInt(new URLSearchParams(window.location.search).get('id'));

}

function displayProfile() {
    const phototographerProfileContainer = document.querySelector('.photographer-header');

    photographers.forEach((photographer) => {
        if (photographer.id === getPhotographersId()) {
            const photographerPageModel = photographerFactory(photographer);
            const userCardPageDOM = photographerPageModel.getUserCardPageDOM();
            phototographerProfileContainer.appendChild(userCardPageDOM);
        }

    })
}

async function initPhotographerPage() {
    const { photographers } = await getPhotographers();
    displayProfile(photographers);
}

initPhotographerPage();