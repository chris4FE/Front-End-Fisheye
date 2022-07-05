/**
 * Fetch photographers' data in json file
 * @returns 
 */
export async function getPhotographers() {
    let photographers;

    await fetch("../../data/photographers.json")
        .then((res) => res.json())
        .then((data) => (photographers = data.photographers))

    return ({
        photographers: [...photographers]
    })
}
