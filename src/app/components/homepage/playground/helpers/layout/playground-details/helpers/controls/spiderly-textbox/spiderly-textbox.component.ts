import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-textbox',
    templateUrl: './spiderly-textbox.component.html',
    styles: [],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RequiredComponent,
        TooltipModule,
    ]
})
export class SpiderlyTextboxComponent extends BaseControl implements OnInit {
    @Input() showButton: boolean = false;
    @Input() buttonIcon: string;
    @Output() onButtonClick = new EventEmitter();
    
    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();
    }

    
    buttonClick() {
        this.onButtonClick.next(null);
    }
    
}
