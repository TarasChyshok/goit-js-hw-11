// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

export const lightbox = new SimpleLightbox('.a-item', {
  nav: true,
  captions: true,
  captionsData: 'attr',
  captionsPosition: 'bottom',
  captionType: 'attr',
  sourceAttr: 'href',
  overlay: true,
  captionSelector: 'img',
  captionDelay: 250,
});

export function createGallery(images) {
  //problem
  //ul-(for-li-img)-insertAdj(ul)
  console.log(images);
  const galleryMarkup = images.map(element => {
    return `<li class="item-gallery">
                <a href="${element.largeImageURL}" class="a-item">
                  <img
                    class="img-gallery"
                    src="${element.webformatURL}" data-likes='${element.likes}' data-view='${element.views}' data-comments='${element.comments}' data-downloads='${element.downloads}' data-source="${element.largeImageURL}" alt="${element.tags}"
                  />
                </a>
                <ul class='info'>
                  <li>Likes <span class='info-span'>${element.likes}</span></li>
                  <li>Views <span class="info-span">${element.views}</span></li>
                  <li>Comments <span class="info-span">${element.comments}</span>
                  <li>Downloads <span class="info-span">${element.downloads}</span></li>
                </ul>
              </li>`;
  });

  const galleryUl = document.querySelector('ul.gallery');
  galleryUl.insertAdjacentHTML('afterbegin', galleryMarkup.join(''));
  console.log(galleryMarkup);
  //simplelightb =new spml('a.gal', {})  simpleLightb.refresh();
  lightbox.refresh();
}
export function clearGallery() {
  const galleryUl = document.querySelector('ul.gallery');
  galleryUl.innerHTML = '';
}
const span = document.querySelector('span.loader');
export function showLoader() {
  // document
  //   .querySelector('form')
  //   .insertAdjacentHTML('afterend', '<span class="loader"></span>');
  if (span != 0) {
    span.classList.add('showLoader');
  }
}
export function hideLoader() {
  // document.querySelector('form').insertAdjacentHTML('afterend', '');
  if (span != 0) {
    span.classList.remove('showLoader');
  }
}
//splghtbx
