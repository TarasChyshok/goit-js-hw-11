import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getImagesByQuery } from './js/pixabay-api';
import { createGallery, hideLoader, showLoader } from './js/render-functions';
// Описаний в документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('a', {
  nav: true,
  captions: true,
  captionsData: 'data',
  captionsPosition: 'bottom',
  captionType: 'attr',
  sourceAttr: 'href',
  overlay: true,
  captionSelector: 'img',
  captionDelay: 250,
}); //problem

//listener
const form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  showLoader();
  if (
    document
      .querySelector('input[name="search-text"]')
      .value.toLowerCase()
      .trim() !== ''
  ) {
    getImagesByQuery(
      document
        .querySelector("input[name='search-text']")
        .value.toLowerCase()
        .trim()
      //if don't error
    )
      .then(response => {
        console.log(response);
        hideLoader();
        // const obj = JSON.parse(data);
        if (
          //obj.length
          response.data.hits.length === 0
        ) {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            backgroundColor: ' #ef4040;',
          });
        } else {
          iziToast.error({
            message: `Sorry, here ${error}!`,
            position: 'topRight',
            backgroundColor: ' #ef4040;',
          });
        }
        return response; //obj
      })
      .catch(error => {
        console.log(error);
        hideLoader();
      })
      .then(responseAxios => {
        // hideLoader();
        createGallery(responseAxios.data.hits);
        lightbox.refresh();
      });
  } else {
    return iziToast.error({
      message: 'Sorry, input is empty!',
      position: 'topRight',
      backgroundColor: ' #ef4040;',
    });
  }
});
