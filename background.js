// TODO
// This will create a navigator instance and handle all background listeners
// keybindings will be read from the config here

chrome.runtime.onInstalled.addListener(() => {

  console.log("CanTab working!");

  // let color = '#3aa757';
  // chrome.storage.sync.set({ color });
  // console.log('Default background color set to %cgreen', `color: ${color}`);
});
