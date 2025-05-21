import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
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
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
        super(platformId);
    }

    override ngOnInit(){
        super.ngOnInit();
    }
}
