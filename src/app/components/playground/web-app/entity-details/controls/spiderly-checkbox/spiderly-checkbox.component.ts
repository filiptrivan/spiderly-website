import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequiredComponent } from '../../required/required.component';

import { TooltipModule } from 'primeng/tooltip';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
    selector: 'spiderly-checkbox',
    templateUrl: './spiderly-checkbox.component.html',
    styles: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        CheckboxModule,
    ]
})
export class SpiderlyCheckboxComponent extends BaseControl implements OnInit {
    @Input() fakeLabel = true;
    @Input() initializeToFalse = false;
    @Input() inlineLabel = false;

    constructor(
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
    super(platformId);
    }

     override ngOnInit(){
        if (this.initializeToFalse == true)
            this.control.setValue(false);

        super.ngOnInit();
    }
}
