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

      button.addEventListener("mouseover", () => {
        this._scrollToImageByScr(imgSrc);
      });
    });
  }

  _scrollToImageByScr(imageSrc) {
    this.querySelector(`.images-list img[src$="${imageSrc}"]`).scrollIntoView();
  }

  _allButtons() {
    return Array.from(this.querySelectorAll(".thumbnails-list button"));
  }

  _allMainImages() {
    return Array.from(this.querySelectorAll(".images-list img"));
  }
}
