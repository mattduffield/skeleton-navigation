import {customElement, syncChildren} from 'aurelia-framework';

@customElement('bs-tab-control')
@syncChildren('items', 'itemsChanged', 'bs-tab-item')
export class BsTabControl {
  
  constructor() {
    this.items = [];
    this.selectedItem = null;
  }

  itemsChanged(mutations) {
    if (this.items.length > 0) {
      if (!this.selectedItem || this.items.indexOf(this.selectedItem) === -1) {
        this.selectItem(this.items[0]);
      }
    }
  }

  selectItem(item) {
    if (this.selectedItem) {
      this.selectedItem.isSelected = false;
    }

    this.selectedItem = item;
    item.isSelected = true;

    if (this.selectedItem) {
      this.selectedItem.isSelected = true;
    }
  }
}