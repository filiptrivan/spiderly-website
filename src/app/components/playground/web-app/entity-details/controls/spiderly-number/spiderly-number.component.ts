import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'spiderly-number',
    templateUrl: './spiderly-number.component.html',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        InputNumberModule,
    ]
})
export class SpiderlyNumberComponent extends BaseControl implements OnInit {
    @Input() prefix: string;
    @Input() showButtons: boolean = true;
    @Input() decimal: boolean = false;
    @Input() maxFractionDigits: number = 0;

    constructor(
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
        super(platformId);
    }

    override ngOnInit(){
        super.ngOnInit();
    }
    
}
