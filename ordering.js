// Tabs Property reference https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab
class Navigation {

    constructor() 
    {
        this.initializeTabList((currentTab, tabsList) => {
            this.currentTab = new TrackTab(currentTab);
            console.log("Current Tab: " + JSON.stringify(this.currentTab));
    
            this.tabsList = new Array();

            let prevTab = null;
            for(let tab in tabsList)
            {
                let newTab = new TrackTab(tab);
                newTab.prev = prevTab;
                this.tabsList.push(tab);    
                prevTab = newTab;
            }
            
            console.log("Tabs List: " + JSON.stringify(this.tabsList));

            this.getAllTabsAsync
        })
    }

    // TODO this currently just queries the FIRST tab
    async getAllTabsAsync() {
        let queryOptions = {};
        let [tabs] = await chrome.tabs.query(queryOptions);
        
        console.log("tabsList:" + JSON.stringify(tabs));
        
        return tabs;
    }

    async initializeTabList(callback) {
        let currentTab = await this.getCurrentTabAsync();
        let tabsList = await this.getAllTabsAsync();
        callback(currentTab, tabsList);
    }
    
    // Gets the tab that this script call is being made from. 
    // May be undefined if called from a non-tab context (background page or popup view)
    async getCurrentTabAsync() {
        debugger;
        let queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        console.log("tab:" + JSON.stringify(tab));
        return tab;
    }
}

class TrackTab {
    constructor(tab)
    {
        this.tab = tab;
        this.prev = null;
        this.next = null;  
    }
}

//#region Listeners

// chrome.runtime.onStartup.addListener(() => {
//     debugger;
//     console.log("Indexing all tabs...");
//     this.tabsList = this.getAllTabs();
//     console.log(tabsList.To)
//     this.currentTab = getCurrentTab();
//     console.log("Done.");
// })

// chrome.tabs.onHighlighted.addListener(() => {
//     debugger;
//     console.log("user switched to new tab");

// })

//#endregion



//#region Query Methods



export {TrackTab as Tab, Navigation}

//#endregion



