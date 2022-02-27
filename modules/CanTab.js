/*
    TODO description
*/

class CanTab {
  #val;

  constructor(tab, prevTab, nextTab) {
    this.#val = tab;
    this.prevTab = prevTab;
    this.nextTab = nextTab;
  }

  get id() {
    return this.#val.id;
  }

  get index() {
    return this.#val.index;
  }

  get windowId() {
    return this.#val.windowId;
  }

  get isActive() {
    return this.#val.active;
  }

  // TODO consider adding some representation for the next/prev data
  get data() {
    return JSON.stringify(this.#val);
  }
}

export { CanTab as CanTab };
