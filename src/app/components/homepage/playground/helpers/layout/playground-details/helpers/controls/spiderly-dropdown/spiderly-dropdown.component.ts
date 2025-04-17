import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { BaseDropdownControl } from '../base-dropdown-control';

import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
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
        DropdownModule,
    ]
})
export class SpiderlyDropdownComponent extends BaseDropdownControl implements OnInit {
    @Output() onChange: EventEmitter<DropdownChangeEvent> = new EventEmitter();

    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();
    }

    change(event: DropdownChangeEvent){
        this.onChange.next(event);
    }

}
