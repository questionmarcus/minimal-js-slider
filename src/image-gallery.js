export class ImageGallery extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this._linkThumbnails();
  }

  _linkThumbnails() {
    this._allButtons().forEach((button) => {
      const imgSrc = button.querySelector("img").getAttribute("src");

      button.addEventListener("focus", () => {
        this._scrollToImageByScr(imgSrc);
      });

      button.addEventListener("mouseenter", ({ target }) => {
        target.focus();
      });

      button.addEventListener("mousedown", (e) => {
        e.preventDefault();
        button.focus();
      });
    });
  }

  _addZoomOnMouseOver() {
    this._allMainImagesWrappers().forEach((wrapper) => {
      const imageElem = wrapper.querySelector("img");
      wrapper.addEventListener("mousemove", ({ layerX, layerY }) => {
        imageElem.style.setProperty(
          "transform",
          "scale(3) translate(-" + layerX + "px, -" + layerY + "px)"
        );
        imageElem.style.setProperty("transform-origin", "0px 0px 0px");
      });
      wrapper.addEventListener("mouseleave", () => {
        imageElem.style.transform = null;
        imageElem.style.transformOrigin = null;
      });
    });
  }

  _scrollToImageByScr(imageSrc) {
    this.querySelector(`.images-list img[src$="${imageSrc}"]`).scrollIntoView();
  }

  _allButtons() {
    return Array.from(this.querySelectorAll(".thumbnails-list button"));
  }

  _allMainImagesWrappers() {
    return Array.from(
      this.querySelectorAll(".images-list .aspect-ratio-4-3-wrapper")
    );
  }
}
