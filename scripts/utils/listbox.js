import {photographGaleryDisplay} from "../pages/gallery.js";

/** DOM elements */
const selectElt = document.querySelector("select");
const listboxCustom = document.querySelector(".listbox-custom");

/** Create new listbox */
const listboxCustomtNew = document.createElement("div");
listboxCustomtNew.classList.add("listbox-custom-new");
listboxCustomtNew.setAttribute("role", "button");
listboxCustomtNew.setAttribute("aria-haspopup", "listbox");
listboxCustomtNew.setAttribute("aria-expanded", "");
listboxCustomtNew.setAttribute("tabindex", 0);
listboxCustomtNew.innerHTML =
  selectElt.options[selectElt.selectedIndex].innerHTML;
listboxCustom.appendChild(listboxCustomtNew);

/** create dropdown list */
const newMenu = document.createElement("div");
newMenu.classList.add("select-items", "select-hide");
newMenu.setAttribute("id", "listbox-select-items");
newMenu.setAttribute("aria-haspopup", "listbox");
newMenu.setAttribute("aria-expanded", "true");
newMenu.setAttribute("tabindex", "0");

/** select options of the listbox */
for (let option of selectElt.options) {
  const newOption = document.createElement("div");
  newOption.setAttribute("role", "listbox");
  newOption.setAttribute("aria-activedescendant", "trier");
  newOption.setAttribute("aria-labelledby", "listbox-select-items");
  newOption.setAttribute("tabindex", "0");
  newOption.innerHTML = option.innerHTML;

  /** Click addeventlistener on list options */
  newOption.addEventListener("click", function () {
    const changeOption = () => {
      for (let option of selectElt.options) {
        if (option.innerHTML === this.innerHTML) {
          selectElt.selectedIndex = option.index;
          listboxCustomtNew.innerHTML = this.innerHTML;
        }
      }
      listboxCustomtNew.click(); /** click behavior to close dropdown list */
    };
    changeOption();
  });

  /** addeventlistener when hitting ENTER on the keyboard to sort media through filter list */
  newOption.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const changeOption = () => {
        for (let option of selectElt.options) {
          if (option.innerHTML === this.innerHTML) {
            selectElt.selectedIndex = option.index;
            listboxCustomtNew.innerHTML = this.innerHTML;
          }
        }
        listboxCustomtNew.click();
      };
      changeOption();
    }
  });

  /** attach options to new listbox */
  newMenu.appendChild(newOption);
}

/** attach option to dropdown list */
listboxCustom.appendChild(newMenu);

/** addeventlistener when hitting ENTER key and filtering */
listboxCustomtNew.addEventListener("click", function (e) {
  /** stop click propagation */
  e.stopPropagation();
  /** remove select-hide from dropdown */
  this.nextSibling.classList.toggle("select-hide"); // toggle = search for string and if there is one removes it
  this.classList.toggle("active");
  photographGaleryDisplay();
  initLike();
});

/** modifies filter when hitting ENTER key */
listboxCustomtNew.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.stopPropagation();
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("active");
    photographGaleryDisplay();
  }
});

/** filter by title */
export function sortMediaByTitle(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
}

/** filter by amount of likes */
export function sortMediaByLikes(a, b) {
  return b.likes - a.likes;
}

/** filter by date */
export function sortMediaByDate(a, b) {
  if (a.date > b.date) {
    return -1;
  }
  if (a.date < b.date) {
    return 1;
  }
  return 0;
}
