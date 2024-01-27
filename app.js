"use strict";

const sharePopEl = document.querySelector(".share-pop");
const triangleEl = document.querySelector(".triangle-down");
const shareEl = document.querySelector(".icon--share");

shareEl.addEventListener("click", function () {
  sharePopEl.classList.toggle("hidden");
  triangleEl.classList.toggle("hidden");
});
