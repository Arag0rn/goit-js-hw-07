import { galleryItems } from './gallery-items.js';
// Change code below this line



const collection = document.querySelector('.gallery');

const listImg = galleryItems.map(({preview, original, description}) =>

`<li class="gallery__item">
   <a class="gallery__link" href="${original}">
    <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
    />
   </a>
 </li>`).join('')


collection.insertAdjacentHTML('afterbegin', listImg )


collection.onclick = (event) => {
   event.preventDefault()
   if (!event.target.classList.contains("gallery__image")){
   return;
}
   const markup = `<img width="1400" height="900" src="${event.target.dataset.source}">`
   const instance = basicLightbox.create(markup,)
   instance.show()

window.addEventListener("keydown", onEscape)

function onEscape(event) {
   if (event.code === "Escape") {
    instance.close(window.removeEventListener("keydown", onEscape));
  }
};

}


