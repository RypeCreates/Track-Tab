# [Track Tab](./index.md): Chronological Tab Ordering 

## Overview

It seems like the bread and butter of this app will come down to having a good system for tracking the chronological order of tabs. 

i.e. we need to protect against circular path structures in which a user is stuck alternating between two tabs.

## Persistance

We will need to figure out how to restore the chronological order of tabs in the event that Chrome is killed via `^Q`, is relaunched, and the user selects the `restore tabs` option. We'll have to consider diving into caching strategies for this. 

As a workaround, any open tabs that are not accounted for within the active window can be added to the chronological list initially according to their indices.

## Assumptions

The chronological list of tabs will only include the tabs seen in the _active_ browser window.
- If a user has more than one instances of chrome, Track Tab will only work for the Tabs within the active (is active the right word?) instance of Chrome.
- 