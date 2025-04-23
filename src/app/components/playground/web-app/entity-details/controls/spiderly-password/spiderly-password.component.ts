import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
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
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
    super(platformId);
    }

    override ngOnInit(){
        super.ngOnInit();
    }

}
