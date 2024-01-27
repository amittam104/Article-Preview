"use strict";

const sharePopEl = document.querySelector(".share-pop");
const triangleEl = document.querySelector(".triangle-down");
const shareEl = document.querySelector(".icon--share");
const shareMobileEl = document.querySelector(".icon--share--mobile");

shareEl.addEventListener("click", function () {
  sharePopEl.classList.toggle("hidden");
  triangleEl.classList.toggle("hidden");
});
shareMobileEl.addEventListener("click", function () {
  sharePopEl.classList.toggle("hidden");
  triangleEl.classList.toggle("hidden");
});

// sharePopEl.addEventListener("click", function () {
//   sharePopEl.classList.toggle("hidden");
//   triangleEl.classList.toggle("hidden");
// });
