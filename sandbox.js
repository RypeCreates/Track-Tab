import { Navigator } from "./modules/Navigator.js";

let nav = new Navigator();

// When the button is clicked, inject setPageBackgroundColor into current page
nextTab.addEventListener("click", async () => {
  nav.goNext();
});

prevTab.addEventListener("click", async () => {
  nav.goPrev();
});

options.addEventListener("click", () => {
  parent.location = "options.html";
});
