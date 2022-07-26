import {initGalery} from "../pages/gallery.js";

/** Fetch data from json file */
let medias;
async function getLikes() {
    await fetch("../../data/photographers.json")
      .then((res) => res.json())
      .then((data) => (medias = data.media));
    return {
      medias: [...medias],
    };
  }

  
  /** Likes function */
  function addClic() {
    /** DOM elements */
    const likesInput = document.querySelectorAll(".like-input");
  
    /** Like input addeventlistener */
    likesInput.forEach((likeInput) => {
      likeInput.addEventListener("click", (e) => {
        /** Variables */
        let likeText = parseInt(
          e.target.nextSibling.textContent
        ); /** Transform text into number (amount of likes) */
        let liked = e.target.nextSibling; /** number of likes */
        let maker = e.currentTarget; /** Target input */
  
        /** if checkbox isn't checked */
        if (!maker.checked) {
          likeText--; /** decrement */
          /** if checkbox is checked */
        } else {
          likeText++; /** Increment */
        }
        liked.textContent = likeText; /** modifies label */
        displayLikes(); /** init display likes function */

      });
    });


    likesInput.forEach((likeInput) => {
      likeInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
        
        let likeText = parseInt(
          e.target.nextSibling.textContent
        ); /** Transform text into number (amount of likes) */
        let liked = e.target.nextSibling; /** number of likes */
        let maker = e.currentTarget; /** Target input */
  
        /** if checkbox isn't checked */
        if (!maker.checked) {
          likeText--; /** decrement */
          /** if checkbox is checked */
        } else {
          likeText++; /** Increment */
        }
        liked.textContent = likeText; /** modifies label */
        displayLikes(); /** init display likes function */

      }
      })

      });
  

  }

  

  
  
  /** show total likes */
  function displayLikes() {
    /** Elements du DOM */
    const nbrLikes = document.querySelectorAll(".like-label");
    const displayLikeCounter = document.querySelector(".counter-likes");
  
    /** Variables */
    let likesText = 0;
    let totalLike = 0;
    let arrayLikes = [];
  
    nbrLikes.forEach((like) => {
      likesText = parseInt(
        like.textContent
      ); /** Transforms text next to input into number (amount of likes) */
      arrayLikes.push(
        likesText
      ); /** adds number of likes of each photographer to array */
      totalLike = arrayLikes.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0); /** calculate array total */
      return (displayLikeCounter.textContent =
        totalLike + " "); /** updates total likes */
    });
  }

  
  /** initialize likes function */
  export async function initLike() {
    await initGalery(); /** wait init of gallery */
    getLikes(); /** call function that gets likes data */
    return (
      addClic(), displayLikes()
    ); /** click like event and display likes function */
  }
  
  /** init like counter and display likes */
  initLike();
  