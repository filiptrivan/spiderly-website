import { Component, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'primeng/colorpicker'
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-colorpick',
    templateUrl: './spiderly-colorpick.component.html',
    styles: [],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        ColorPickerModule,
    ]
})
export class SpiderlyColorpickComponent extends BaseControl implements OnInit {

    constructor(
    ) { 
        super();
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
