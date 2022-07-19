import {photographerFactory} from "../factories/photographerFactory.js";
import {getPhotographers} from "../utils/api.js";

// Displaying data on single photographers' page

/**
 * 
 * @returns photographers ID
 */
function getPhotographersId() {
    // fetch photographers' ID
    let searchParam = new URLSearchParams(window.location.search);
    let id = parseInt(searchParam.get('id'));
    console.log(id);
    return id;

}

/**
 * Displays photographers' card on photographer page
 * @param {*} photographers 
 */
function displayProfile(photographers) {
    const phototographerProfileContainer = document.querySelector('.photographer-header');
    const widget = document.querySelector(".widget");
    const contactNameForm = document.querySelector('.contact-name');

    photographers.forEach((photographer) => {
        if (photographer.id === getPhotographersId()) {
            const photographerPageModel = photographerFactory(photographer);
            const userCardPageDOM = photographerPageModel.getUserCardPageDOM();
            phototographerProfileContainer.appendChild(userCardPageDOM);

        // Display counter widget
        const widgetDisplay = photographerPageModel.getUserCounterDOM();
        widget.appendChild(widgetDisplay);

        // Display photographer's name on contact form
        const displayContact = photographerPageModel.getUserContactDOM();
        contactNameForm.appendChild(displayContact);
        }

        

    })
}


async function initPhotographerPage() {
    const { photographers } = await getPhotographers();
    displayProfile(photographers);
}

initPhotographerPage();



