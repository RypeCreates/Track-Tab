import { Navigator } from "./modules/Navigator.js";

// TODO
// This will create a navigator instance and handle all background listeners
// keybindings will be read from the config here

let nav = new Navigator();

chrome.runtime.onInstalled.addListener(() => {
  console.log("CanTab Installed!");
  if(nav === undefined)
  {
    console.log("Initializing navigator on install...")
    nav = new Navigator();
  }
});

chrome.runtime.onStartup.addListener(() => {
  if(nav === undefined)
  {
    console.log("Initializing navigator on startup...");
    nav = new Navigator();
  }
})

// note that generic object o has property tabIds that is an array of ints
chrome.tabs.onHighlighted.addListener((o) => { 
  debugger;
  console.log("Tab with id "+o.tabIds[0]+" HIGHLIGHTED.");
});

// note that generic object o has property tabId of type int
chrome.tabs.onActivated.addListener((o) => {
  debugger;
  console.log("Tab with id "+o.tabId+" ACTIVATED.");
});

// note that generic object o has property id of type int
chrome.tabs.onCreated.addListener((o) => {
  debugger; 
  console.log("Tab with id "+o.id+" CREATED.");
});

chrome.tabs.onRemoved.addListener(
  (o) => {
    debugger;
    let tabId = o.tabIds[0];
    nav.popTab(tabId);
  }
)

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command: ${command} triggered`);
});