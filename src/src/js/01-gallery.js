import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


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
  console.dir(event.target) 
   event.preventDefault()
	basicLightbox.create(`
		<img width="1400" height="900" src="${event.target.dataset.source}">
	`).show()

}