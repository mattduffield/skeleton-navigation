import {customElement, bindable, useShadowDOM} from 'aurelia-framework';

@customElement('bs-tab-item')
//@useShadowDOM
@bindable({
  name:'isSelected', //name of the property on the class
  defaultValue: false //default value of the property, if not bound or set in HTML
}) 
export class BsTabItem {
  @bindable title;
  @bindable tabGlyph;
//  @bindable isSelected = false;

  constructor() {
  }  
}