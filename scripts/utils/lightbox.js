/** DOM elements */
const lightboxDisplay = document.getElementById("lightbox");
const prevNavigation = document.getElementById("prev");
const nextNavigation = document.getElementById("next");

/** Open carousel */
export function openLightbox() {
  lightboxDisplay.style.display = "block";
  main.setAttribute("aria-hidden", true);
  lightboxDisplay.setAttribute("aria-hidden", false);
  prevNavigation.focus();
}

document.closeLightbox = closeLightbox;
/** Close carousel */
function closeLightbox() {
  lightboxDisplay.style.display = "none";
  main.setAttribute("aria-hidden", false);
  lightboxDisplay.setAttribute("aria-hidden", true);
  logo.focus();
}

/** Carousel class */
export default class Lightbox {
  constructor(currentSlide, element, options = {}) {
    this.element = element;
    this.options = Object.assign(
      {},
      {
        slidesToScroll: 1, // number of visible slides while scrolling
        slidesVisible: 1, // number of visible slides
      },
      options
    );
    this.currentSlide = currentSlide;
    this.goToSlide(this.currentSlide);
    this.navigation();
  }

  /** carousel navigation */
  navigation() {
    prevNavigation.addEventListener("click", this.prev.bind(this));
    nextNavigation.addEventListener("click", this.next.bind(this));

    /** Keyboard nav */
    lightboxDisplay.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        this.prev();
      }
      if (e.key === "ArrowRight") {
        this.next();
      }
      if (e.key === "Escape") {
        closeLightbox();
      }
    });
  }

  /** show next media slide */
  next() {
    this.goToSlide(this.currentSlide + this.options.slidesToScroll);
  }

  /** show previous media slide */
  prev() {
    this.goToSlide(this.currentSlide - this.options.slidesToScroll);
  }

  /** show media depending on index */
  goToSlide(index) {
    if (index < 0) {
      index = this.element - this.options.slidesVisible;
    } else if (index > this.element - this.options.slidesVisible) {
      index = 0;
    }
    const lightboxContainer = document.getElementById("lightbox-container");
    let ratioSlider = (index * -100) / this.element; /** photo index multiplied by -100 and divided by number of media of this photographer to get image centered opened in lightbox */
    let ratioWidth = 100 * this.element; /** number of medias multipled by 100% to increase carousel width depending on number of media */
    lightboxContainer.style.transform = "translateX(" + ratioSlider + "%)"; /** positions container depending on ratioslider */
    lightboxContainer.style.width = ratioWidth + "%";
    this.currentSlide = index;
  }
}
