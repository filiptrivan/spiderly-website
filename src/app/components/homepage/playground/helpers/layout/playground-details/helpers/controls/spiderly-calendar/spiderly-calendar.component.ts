import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { BaseControl } from '../base-control';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CalendarModule } from 'primeng/calendar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-calendar',
    templateUrl: './spiderly-calendar.component.html',
    styles: [],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        CalendarModule
    ]
})
export class SpiderlyCalendarComponent extends BaseControl implements OnInit {
    @Input() showTime: boolean = false;

    constructor(
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
        super(platformId);
    }

    override ngOnInit(){
        super.ngOnInit();
    }

    setDate(event:Date) { 
        
    }
}
