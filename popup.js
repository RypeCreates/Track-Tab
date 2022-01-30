import { Navigation } from "./ordering.js";

// Initialize butotn with users's prefered color
let onOff = document.getElementById("onOff");

chrome.storage.sync.get("color", ({ color }) => {
  onOff.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
onOff.addEventListener("click", async () => {
  console.log("button click");
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  let nav = new Navigation();
  
  // When the button is clicked, inject setPageBackgroundColor into current page
  changeTab.addEventListener("click", async () => {
    debugger;
    console.log("Track Tab Enabled");
    console.log(nav.getAllTabs());
  });

  // chrome.scripting.executeScript({
  //   target: { tabId: tab.id },
  //   function: setPageBackgroundColor,
  // });
});

// The body of this function will be execuetd as a content script inside the
// current page
// function setPageBackgroundColor() {
//   chrome.storage.sync.get("color", ({ color }) => {
//     document.body.style.backgroundColor = color;
//   });
// }
