# Track Tab Functional Specifications

## Overview

Track Tab is a browser-based productivity extension that allows the user to view and navigate between multiple Browser Tabs chronologically and see the most previously viewed tabs at a glance.

See: [Chrome Extensions Overview](https://developer.chrome.com/docs/extensions/mv3/overview/)

See: [Scaffolded Extension Project](https://developer.chrome.com/docs/extensions/mv3/getstarted/) 
- this link contains instructions for loading an unpacked extension locally.
## Feature Specifications

We'll want to double check each of these and make sure that there isn't some sort of hidden default feature in Chrome that would make a feature pointless to work on.

### [Chronological Tab Ordering](./ordering.md)

### [Highlighting](./highlighting.md)

### [Keybindings and Keyboard Shortcut Navigation](./keybindings.md)

### [Configuration](./config.md)

## Frameworks

TODO - some modern combination of HTML, CSS, JS. 

## Testing

Depending on how much we gave a fuck about this, we could try out some sort of free DevOps CI pipelining tools + create some unit tests.

## Distribution

Track Tab will be made available for download on the Google Chrome Web Store. We'll need to do some R&D here to see what sort of registration/fees might come along with launching an app there. 
- See [Chrome Enterprise Help](https://support.google.com/chrome/a/answer/2714278?hl=en)

---
## Backlog

- Chrome supports pinned tabs and tab groups. We could brainstorm ways to leverage those existing technologies. 
