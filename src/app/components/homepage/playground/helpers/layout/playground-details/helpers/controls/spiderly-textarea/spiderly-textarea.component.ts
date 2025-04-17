import { Component, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';
import { TextareaModule } from 'primeng/textarea';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-textarea',
    templateUrl: './spiderly-textarea.component.html',
    styles: [],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RequiredComponent,
        TextareaModule,
        TooltipModule,
    ]
})
export class SpiderlyTextareaComponent extends BaseControl implements OnInit {

    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();
    }
}
