import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { BaseDropdownControl } from '../base-dropdown-control';

import { SelectChangeEvent, SelectModule } from 'primeng/select';
// import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-dropdown',
    templateUrl: './spiderly-dropdown.component.html',
    styles: [],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        CommonModule,
        RequiredComponent,
        SelectModule,
        // DropdownModule,
    ]
})
export class SpiderlyDropdownComponent extends BaseDropdownControl implements OnInit {
    @Output() onChange: EventEmitter<SelectChangeEvent> = new EventEmitter();

    constructor(
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
        super(platformId);
    }

    override ngOnInit(){
        super.ngOnInit();
    }

    change(event: SelectChangeEvent){
        this.onChange.next(event);
    }

}
