// Tabs Property reference https://developer.chrome.com/docs/extensions/reference/tabs/#type-Tab
class Navigation {

    constructor() 
    {
        console.log("Called navigation constructor...");
        this.initializeTabList((queriedTabs) => {
            this.tabsList = new Array();

            let prevTab = null;
            queriedTabs.forEach(t => {
                let newTab = new CanTab(t);
                
                if(prevTab){
                    newTab.prevTab = prevTab;
                    prevTab.nextTab = newTab;
                } 
                this.tabsList.push(newTab);  
                prevTab = newTab;
            })

            // close the loop
            this.tabsList[this.tabsList.length - 1].nextTab = this.tabsList[0];
            this.tabsList[0].prevTab = this.tabsList[this.tabsList.length - 1];

            // find the current tab in the queried tabsList 
            this.currentTab = this.tabsList.find(function(canTab) {
                return canTab.val.active === true;
            });
        });
    }

    async initializeTabList(callback) {
        let queryOptions = {};
        let tabsList = await chrome.tabs.query(queryOptions);
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

    async highlightTabAsync(tabIndex, callBack) {

        var object = new Object(); 
        object.tabs = [tabIndex];
        object.windowId = this.currentTab.val.windowId;

        await chrome.tabs.highlight(object, callBack);
    }

    getCurrentTab() {
        console.log("Current Tab:" + JSON.stringify(this.currentTab.val));
        return this.currentTab;
    }

    getTabById(id) {
        return this.tabsList.find(x => x.id === id);
    }

    goNext() {
        debugger;
        console.log("(goNext) expected next tab id: " + this.currentTab.nextTab.val.id);
        this.currentTab = this.currentTab.nextTab;

        this.highlightTabAsync(this.currentTab.val.index, () => {
            console.log("(goNext) Set current tab id: " + this.currentTab.val.id);
        });
    }

    prependTab(tab)
    {
        // TODO tab will be added in between currentTab and its respective prev
    }
}

class CanTab {
    constructor(tab, prevTab, nextTab)
    {
        this.val = tab;
        this.prevTab = prevTab ?? null;
        this.nextTab = nextTab ?? null;  
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



export {CanTab as Tab, Navigation}

//#endregion



