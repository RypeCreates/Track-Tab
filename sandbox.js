import { Navigation } from "./ordering.js";

// let nextTab = document.getElementById("changeTab");
let nav = new Navigation();

// When the button is clicked, inject setPageBackgroundColor into current page
nextTab.addEventListener("click", async () => {
  debugger;
  nav.goNext();
});

currentTab.addEventListener("click", async() =>{
  debugger;
  var currentTabUrl = nav.getCurrentTab().val.url
  console.log("Current Tab: " + currentTabUrl);
})
