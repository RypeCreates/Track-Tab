import { Navigation } from "./ordering.js";

let changeTab = document.getElementById("changeTab");
let nav = new Navigation();

// When the button is clicked, inject setPageBackgroundColor into current page
changeTab.addEventListener("click", async () => {
  debugger;
  console.log("Selected Change Tab");
  console.log(nav.getAllTabs());
});
