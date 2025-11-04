import { Component, OnInit } from '@angular/core';
import { SectionWrapperComponent } from 'src/app/components/section-wrapper/section-wrapper.component';
import { InfoCardComponent } from 'spiderly';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'successful-payment',
    templateUrl: './successful-payment.component.html',
    imports: [
        SectionWrapperComponent,
        InfoCardComponent,
        ButtonModule,
        RouterModule,
    ]
})
export class SuccessfulPaymentComponent implements OnInit {
    
    constructor(
    ) { }

    ngOnInit(){
    }
}

