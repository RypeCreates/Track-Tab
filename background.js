// background.js

let color = "#3aa757";

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log("Default background color set to %cgreen", `color: ${color}`);
});

// IN PROGRESS but query can be used to keep track of # of tabs in a given window and track accordingly
chrome.tabs.onCreated.addListener(() => {
  chrome.tabs.query({ currentWindow: true }, (count) => {
    console.log("# of Tabs: ", count.length);
  });
});
