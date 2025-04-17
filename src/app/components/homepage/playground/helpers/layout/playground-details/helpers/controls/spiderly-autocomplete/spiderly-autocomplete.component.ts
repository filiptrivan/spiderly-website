import { Component, Input, OnInit } from '@angular/core';
import { AutoCompleteCompleteEvent, AutoCompleteModule } from 'primeng/autocomplete';
import { BaseAutocompleteControl } from '../base-autocomplete-control';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { TooltipModule } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-autocomplete',
    templateUrl: './spiderly-autocomplete.component.html',
    styles: [],
    standalone: true,
    imports: [
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        CommonModule,
        RequiredComponent,
        AutoCompleteModule,
    ]
})
export class SpiderlyAutocompleteComponent extends BaseAutocompleteControl implements OnInit {
    // @Input() required: boolean = true; // TODO FT: delete if you don't need through whole app
    @Input() appendTo: any = 'body';
    @Input() showClear: boolean = true;
    @Input() emptyMessage: string;
    @Input() displayName: string; // FT: Added because when we initialize the object options are null

    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();

        if (this.options == null && this.control.value != null) {
            this.options = [
                { label: this.displayName, value: this.control.value }
            ];
        }

        if (this.emptyMessage == null) {
            this.emptyMessage = 'No results found';
        }
    }

    search(event: AutoCompleteCompleteEvent){
        this.onTextInput.next(event);
    }

    select(event){
    }

}
