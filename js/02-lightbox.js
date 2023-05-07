import { galleryItems } from "./gallery-items.js";

const listGalleryEl = document.querySelector(".gallery");
listGalleryEl.insertAdjacentHTML(
  "beforeend",
  createMakringListOfImages(galleryItems)
);

listGalleryEl.addEventListener("click", onClickImage);

createMakringListOfImages(galleryItems);

function createMakringListOfImages(elements) {
  const markingImages = elements
    .map(({ preview, original, description }) => {
      const marking = `
        <li class="gallery__item">
          <a self class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" attr="${description}"/>
          </a>
        </li>
        `;

      return marking;
    })
    .join("");

  return markingImages;

  console.log(markingImages);
}

function onClickImage(e) {
  if (e.target.nodeName !== "IMG") {
    return;
  }

  e.preventDefault();
}

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
