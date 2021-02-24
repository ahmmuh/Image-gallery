//modal

const modalImage = document.querySelector("#modal-image");
// const modalTitle = document.querySelector("#modalTitle");
const modalDescription = document.querySelector("#modalDec");
const modal = document.querySelector("#simpleModal");
const closeBtn = document.querySelector("#closeBtn");

//modal elements from galleryItems

const galleryImages = document.querySelectorAll(".gallery-image");

galleryImages.forEach((image) => {
  image.addEventListener("click", function () {
    modalImage.src = image.src;
    openModal();
  });
});

const openModal = () => {
  modal.style.display = "block";
};

const closeModal = () => {
  modal.style.display = "none";
};

const outSideWindow = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
window.addEventListener("click", outSideWindow);

closeBtn.addEventListener("click", closeModal);
