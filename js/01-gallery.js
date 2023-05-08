import { galleryItems } from "./gallery-items.js";

const ulGalleryEl = document.querySelector(".gallery");

ulGalleryEl.insertAdjacentHTML("beforeend", createImagesGallary(galleryItems));

ulGalleryEl.addEventListener("click", onImageClick);

function createImagesGallary(galleryItems) {
  const markupGallary = galleryItems
    .map(({ preview, original, description }) => {
      const imagesMarking = `
      <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;

      return imagesMarking;
    })
    .join("");

  return markupGallary;
}

function onImageClick(e) {
  e.preventDefault();

  if (e.target.nodeName !== "IMG") {
    return;
  }

  showAndCloseImage(e);
}

function showAndCloseImage(e) {
  const instance = basicLightbox.create(
    `
	<img
            class="gallery__image"
            src="${e.target.dataset.source}"
            data-source="${e.target.dataset.source}"
            alt="${e.target.alt}"
          />
`
  );

  instance.show();

  document.addEventListener("keydown", keyClose);

  function keyClose(e) {
    if (e.key === "Escape") {
      instance.close();
      document.removeEventListener("keydown", keyClose);
    }
  }
}
