export async function getPhotographers() {
    let photographers;
    // Penser à remplacer par les données récupérées dans le json
    await fetch("../../data/photographers.json")
        .then((res) => res.json())
        .then((data) => (photographers = data.photographers))

    return ({
        photographers: [...photographers]
    })
}

// Displaying data on single photographers' page

function getPhotographersId() {
    // fetch photographers' ID
    return parseInt(new URLSearchParams(window.location.search).get('id'));

}