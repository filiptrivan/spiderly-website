import { Component, Inject, Input, OnInit, PLATFORM_ID } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FileSelectEvent, FileUploadModule } from 'primeng/fileupload';
import { isExcelFileType, isImageFileType } from '../../services/helper-functions';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'spiderly-file',
    templateUrl: './spiderly-file.component.html',
    styles: [],
    styleUrl: '../../../../../../pages/playground/playground.component.scss',
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        FileUploadModule,
        ButtonModule,
        HttpClientModule, // NOTE FT: Without HttpClientModule control is throwing null injector exception. 
    ]
})
export class SpiderlyFileComponent extends BaseControl implements OnInit {
    @Input() acceptedFileTypes: Array<'image/*' | 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' | 'application/vnd.ms-excel' | '.xlsx' | '.xls'> = ['image/*'];
    @Input() required: boolean; // FT: It's okay for this control, because for the custom uploads where we are not initializing the control from the backend, there is no need for formControl.
    @Input() multiple: boolean = false;
    
    acceptedFileTypesCommaSeparated: string;
    @Input() files: File[] = [];

    constructor(
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
    super(platformId);
    }

    override ngOnInit(){
        if (this.control?.value != null) {
            const file = this.control.value;
            this.files.push(file);
        }

        this.acceptedFileTypesCommaSeparated = this.acceptedFileTypes.join(',');

        super.ngOnInit();
    }

    filesSelected(event: FileSelectEvent){
        const file = event.files[0];
        this.control.setValue(file);
    }

    choose(event, chooseCallback){
        chooseCallback();
    }
    
    fileRemoved(removeFileCallback, index: number){
        removeFileCallback(index);
        this.control.setValue(null);
    }

    isImageFileType(mimeType: string): boolean {
        return isImageFileType(mimeType);
    }

    isExcelFileType(mimeType: string): boolean {
        return isExcelFileType(mimeType);
    }

}