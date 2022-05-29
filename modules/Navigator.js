import { CanTab } from "./CanTab.js";

/*
    The navigator creates the circular structure of canTabs and handles all business logic
*/
class Navigator {
  constructor() {
    console.log("Initializing Navigator...");
    this.initializeTabList((queriedTabs) => {
      this.tabsList = new Array();

      let prevTab = null;
      queriedTabs.forEach((t) => {
        let newTab = new CanTab(t);

        if (prevTab) {
          newTab.prevTab = prevTab;
          prevTab.nextTab = newTab;
        }
        this.tabsList.push(newTab);
        prevTab = newTab;
      });

      // close the loop
      this.tabsList[this.tabsList.length - 1].nextTab = this.tabsList[0];
      this.tabsList[0].prevTab = this.tabsList[this.tabsList.length - 1];

      // find the current tab in the queried tabsList
      this.currentTab = this.tabsList.find(function (canTab) {
        return canTab.isActive === true;
      });
    });
    console.log("...Done.");
  }

  async initializeTabList(callback) {
    let queryOptions = {};
    let tabsList = await chrome.tabs.query(queryOptions);
    callback(tabsList);
  }

  // Gets the tab that this script call is being made from.
  // May be undefined if called from a non-tab context (background page or popup view)
  async getCurrentTabAsync() {
    let queryOptions = { active: true, currentWindow: true };
    let [tab] = await chrome.tabs.query(queryOptions);
    return tab;
  }

  async highlightTabAsync(tabIndex, callBack) {
    var object = new Object();
    object.tabs = [tabIndex];
    object.windowId = this.currentTab.windowId;

    await chrome.tabs.highlight(object, callBack);
  }

  GetCurrentTabData() {
    console.log("Current Tab:" + this.currentTab.data);
    return this.currentTab;
  }

  getTabById(id) {
    return this.tabsList.find((x) => x.id === id);
  }

  async goNext() {
    this.currentTab = this.currentTab.nextTab;

    this.highlightTabAsync(this.currentTab.index, () => {
      console.log("(goNext) Set current tab id: " + this.currentTab.id);
    });
  }

  goPrev() {
    this.currentTab = this.currentTab.prevTab;

    this.highlightTabAsync(this.currentTab.index, () => {
      console.log("(goPrev) Set current tab id: " + this.currentTab.id);
    });
  }

  prepend(tab) {
    // TODO tab will be added in between currentTab and its respective prev
  }

  popTab(id) {
    debugger;
    var index = this.getTabById(id).index;
    // TODO need to adjust prevTab and nextTab properties here as part of the splice

    this.tabsList.splice(index,1);
  }

  /// https://stackoverflow.com/questions/586182/how-to-insert-an-item-into-an-array-at-a-specific-index-javascript
  pushTab(id) {
    debugger;
    // TODO need to adjust prevTab and nextTab properties here as part of the insert 
    let t = this.getTabById(id);

    // find previous tab
    
    // find next tab

    let canTab = new CanTab(t);
    this.tabsList.splice(t.index, 0, t);

  }

  delay(time) {
    console.log("delay for "+time+" milliseconds");
    return new Promise(resolve => setTimeout(resolve, time));
  }
}

export { Navigator as Navigator };
