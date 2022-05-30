import { Navigator } from "./modules/Navigator.js";

let nav = new Navigator();

/**
 * INSTALLATION AND STARTUP LISTENERS
 */

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

/**
 * ANY TAB NAVIGATION OUTSIDE OF THE CANTAB SHORTCUTS WILL RESULT IN A RESTRUCTURING OF THE LINKED LIST.
 * THE BELOW LISTENERS ARE FOR USER ACTIONS OUTSIDE OF CANTAB SHORTCUTS 
 */

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

chrome.tabs.onRemoved.addListener((o) => {
    debugger;
    let tabId = o.tabIds[0];
    nav.popTab(tabId);
});

/**
 * COMMAND LISTENERS
 */

chrome.commands.onCommand.addListener((command) => {
  debugger;
  console.log(`Command: ${command} triggered`);
  let p = Promise.resolve();

  switch(command)
  {
    case "go-previous-tab":
      p = p.then(nav.goPrev());
      break;
    case "go-next-tab":
      p = p.then(nav.goNext());
      break;
    case "rebuild-index":
      p = p.then(nav = new Navigator());
      break;
    default:
      console.log("Untracted command registered in manifest: "+command);
      break;
  }
});