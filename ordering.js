// Tabs Property reference https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab
class Navigation {

    constructor() 
    {
        this.initializeTabList((queriedTabs) => {
            // find the current tab in the queried tabsList 
            let currentTab = queriedTabs.find(function(tab) {
                return tab.active == true;
            });

            this.currentTab = new TrackTab(currentTab);
            this.tabsList = new Array();

            let prevTab = null;

            queriedTabs.forEach(t => {
                let newTab = new TrackTab(t);
                
                // TODO this could probably be refactored eventually
                if(prevTab){
                    newTab.prevId = prevTab.tab.id;
                    prevTab.nextId = newTab.tab.id;
                } 
                this.tabsList.push(newTab);  
                prevTab = newTab;
            })

            // close the loop
            this.tabsList[this.tabsList.length - 1].nextId = this.tabsList[0].tab.id;
            this.tabsList[0].prevId = this.tabsList[this.tabsList.length - 1].tab.id;

            // TODO add a conditional to only log while in sandbox
            console.log("(constructor) tabsList: " + JSON.stringify(this.tabsList));
        });
    }

    async getAllTabsAsync() {
        let queryOptions = {};
        let tabs = await chrome.tabs.query(queryOptions);
        
        return tabs;
    }

    // TODO this can probably just be combined with getAllTabsAsync
    async initializeTabList(callback) {
        let tabsList = await this.getAllTabsAsync();
        callback(tabsList);
    }
    
    // Gets the tab that this script call is being made from. 
    // May be undefined if called from a non-tab context (background page or popup view)
    async getCurrentTabAsync() {
        debugger;
        let queryOptions = { active: true, currentWindow: true };
        let [tab] = await chrome.tabs.query(queryOptions);
        return tab;
    }
}

class TrackTab {
    constructor(tab)
    {
        this.tab = tab;
        this.prevId = null;
        this.nextId = null;  
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



