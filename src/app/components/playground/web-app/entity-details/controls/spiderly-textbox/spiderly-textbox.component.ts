import { Component, EventEmitter, Inject, Input, OnInit, Output, PLATFORM_ID } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';

@Component({
    selector: 'spiderly-textbox',
    templateUrl: './spiderly-textbox.component.html',
    styles: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RequiredComponent,
        TooltipModule,
        InputTextModule,
    ]
})
export class SpiderlyTextboxComponent extends BaseControl implements OnInit {
    @Input() showButton: boolean = false;
    @Input() buttonIcon: string;
    @Output() onButtonClick = new EventEmitter();
    
    constructor(
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
    super(platformId);
    }

    override ngOnInit(){
        super.ngOnInit();
    }

    
    buttonClick() {
        this.onButtonClick.next(null);
    }
    
}
