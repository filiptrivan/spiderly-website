import {
    Component,
    EventEmitter,
    Input,
    Output,
  } from '@angular/core';
import { BaseControl } from './base-control';
import { PrimengOption } from '../entities/primeng-option';

  @Component({
    selector: 'base-dropdown-control',
    template: '',
    styles: [],
  })
  export class BaseDropdownControl extends BaseControl {
    @Input() options: PrimengOption[];
    @Input() showAddon: boolean = false;
    @Input() addonIcon: string = 'pi pi-ellipsis-h';
    @Input() override placeholder: string = 'Select from the list';
    @Output() onButtonClick: EventEmitter<null> = new EventEmitter();
    
    constructor(
    ) {
      super();
    }

    dropdownMarkAsDirty(){
      this.control.markAsDirty();
    }

    addonClick(){
      this.onButtonClick.next(null);
    }
  }