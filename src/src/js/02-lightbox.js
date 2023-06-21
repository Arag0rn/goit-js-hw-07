import { galleryItems } from './gallery-items.js';
// Change code below this line

const collection = document.querySelector('.gallery');

const listImg = galleryItems.map(({preview, original, description}) =>

`<li class="gallery__item">
<a class="gallery__link" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
</li>`).join('')

 collection.insertAdjacentHTML('afterbegin', listImg )


collection.onclick = (event) => {
    event.preventDefault()
    if (!event.target.classList.contains("gallery__image")){
        return;
     }

     let gallery = new SimpleLightbox('.gallery a', {captionsData: `alt`, captionDelay: 250});
     gallery.on('show.simplelightbox', function () {
        
     });
  
}


