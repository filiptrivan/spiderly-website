import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RequiredComponent } from '../../required/required.component';
import { BaseDropdownControl } from '../base-dropdown-control';
import { MultiSelectModule } from 'primeng/multiselect';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-multiselect',
    templateUrl: './spiderly-multiselect.component.html',
    styles: [
    ],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        MultiSelectModule,
    ]
})
export class SpiderlyMultiSelectComponent extends BaseDropdownControl implements OnInit {
    
    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();
    }
}
