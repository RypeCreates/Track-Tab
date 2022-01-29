var imageLink = chrome.runtime.getURL("./images/kirby.png");
var link =
  document.querySelector("link[rel*='icon']") || document.createElement("link");
link.type = "image/x-icon";
link.rel = "shortcut icon";
link.href = imageLink;
document.getElementsByTagName("head")[0].appendChild(link);
