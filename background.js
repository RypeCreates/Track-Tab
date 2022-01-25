change_favicon = async (img) => {
  let queryOptions = { active: true, currentWindow: true };
  let [tab] = await chrome.tabs.query(queryOptions, async (tab) => {
    await chrome.tabs.update(tab.id, { favIconUrl: "" }, () => {
      console.log(tab);
    });
  });
};

let color = "#3aa757";

//chrome.runtime.onInstalled.addListener(() => {
//chrome.storage.sync.set({ color });
//console.log("Default background color set to %cgreen", `color: ${color}`);

change_favicon("https://codepad.co/img/icn_logo.png");
//});
