import {
    Component, Inject, Input,
    PLATFORM_ID,
  } from '@angular/core';
import { SpiderlyFormControl } from '../spiderly-form-control/spiderly-form-control';
import { isPlatformBrowser } from '@angular/common';
  
  @Component({
    selector: 'base-control',
    template: '',
    styles: [],
  })
  export class BaseControl {
    @Input() control: SpiderlyFormControl; // FT: if you name it formControl: https://stackoverflow.com/a/54755671/21209982
    @Input() disabled: boolean = false;
    @Input() label: string = null; // NgModel/Want custom translation
    @Input() controlValid: boolean = true; // NgModel
    @Input() placeholder: string = '';
    @Input() showTooltip: boolean = false;
    @Input() tooltipText: string = null;
    @Input() tooltipIcon: string = 'pi pi-info-circle';
    errorMessageTooltipEvent: 'hover' | 'focus';
    
    constructor(
      @Inject(PLATFORM_ID) protected platformId: Object
    ) {

    }

    ngOnInit(){
      if(this.control != null && this.disabled == true)
        this.control.disable();
      
      if (isPlatformBrowser(this.platformId)) {
        this.errorMessageTooltipEvent = window.innerWidth > 1000 ? 'hover' : 'focus';
      }
    }

    ngAfterViewInit(){

    }

    getTranslatedLabel(): string{
      return this.label ?? this.control.labelForDisplay;
    }

    getValidationErrrorMessages(){
      if(this.control?.errors && this.control?.dirty){
          // FT: it should always be one error message for single form control, 
          // also i don't need to reassign it to null because it will be shown only when control.valid == false
          return this.control.errors['_'];
      }

      return null;
    }

  }