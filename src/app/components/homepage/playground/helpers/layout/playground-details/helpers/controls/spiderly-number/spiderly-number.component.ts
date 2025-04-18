import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';

@Component({
    selector: 'spiderly-number',
    templateUrl: './spiderly-number.component.html',
    styles: [],
    standalone: true,
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
    @Input() decimal: boolean;
    @Input() maxFractionDigits: number = 0;

    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();
    }
    
}
