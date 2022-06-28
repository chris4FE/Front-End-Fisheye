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
