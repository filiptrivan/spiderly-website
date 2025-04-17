import { Component, Input, OnInit } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';
import { PasswordModule } from 'primeng/password';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-password',
    templateUrl: './spiderly-password.component.html',
    styles: [],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        PasswordModule
    ]
})
export class SpiderlyPasswordComponent extends BaseControl implements OnInit {
    @Input() showPasswordStrength: boolean = false;

    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();
    }

}
