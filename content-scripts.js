var imageOneLink = chrome.runtime.getURL("/images/tab_images/kirby.png");

var link =
  document.querySelector("link[rel*='icon']") || document.createElement("link");
link.type = "image/x-icon";
link.rel = "shortcut icon";
link.href = imageOneLink;
document.getElementsByTagName("head")[0].appendChild(link);
