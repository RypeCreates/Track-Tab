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

loop.addEventListener("click", () => {
  console.log("looping...");

  // TODO take a look at promisifying for loops here https://stackoverflow.com/questions/40328932/javascript-es6-promise-for-loop
  for(let i = 0, p = Promise.resolve(); i < nav.tabsList.length; i++)
  {
    p = p.then(() => nav.goNext())
         .then(() => nav.delay(100))
         .then(() => nav.GetCurrentTabData());
  }

});