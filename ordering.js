
// Tabs Property reference https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab

class Tab {
    constructor(id)
    {
        this.id = id;
        this.prev = null;
        this.next = null;  
    }
}

//#region Listeners

chrome.runtime.onStartup.addListener(() => {
    debugger;
    console.log("Indexing all tabs...");
    this.tabsList = this.getAllTabs();
    console.log(tabsList.To)
    this.currentTab = getCurrentTab();
    console.log("Done.");
})

chrome.tabs.onHighlighted.addListener(() => {
    debugger;
    console.log("user switched to new tab");

})

//#endregion



//#region Query Methods

class Navigation {

    constructor() {}

    async getAllTabs() {
        let queryOptions = { active: true };
        let [tabs] = await chrome.tabs.query(queryOptions);
        return tabs;
    }
    
    // Gets the tab that this script call is being made from. 
    // May be undefined if called from a non-tab context (background page or popup view)
    async getCurrentTab() {
        let queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }
}

export {Tab, Navigation}

//#endregion



