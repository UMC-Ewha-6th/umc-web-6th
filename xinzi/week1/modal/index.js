const open = document.querySelector(".open-btn");
const close = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-wrapper");

open.onclick = () => {
  modal.style.display = "flex";
};
close.onclick = () => {
  modal.style.display = "none";
};
