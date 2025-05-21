import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker'
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'spiderly-colorpick',
    templateUrl: './spiderly-colorpick.component.html',
    styles: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        ColorPickerModule,
        InputTextModule,
    ]
})
export class SpiderlyColorpickComponent extends BaseControl implements OnInit {

    constructor(
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
    super(platformId);
    }

    override ngOnInit(){
        this.control.valueChanges.subscribe((value) => {
            this.control.setValue(value, { emitEvent: false }); // FT: Preventing infinite loop
        });

        if (this.control.value == null)
            this.placeholder = 'Select a color';

        super.ngOnInit();
    }

}
