import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { BaseControl } from '../base-control';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RequiredComponent } from '../../required/required.component';
import { CommonModule } from '@angular/common';

import { TooltipModule } from 'primeng/tooltip';
import { Editor, EditorModule } from 'primeng/editor';
import { Tooltip } from 'primeng/tooltip';

@Component({
    selector: 'spiderly-editor',
    templateUrl: './spiderly-editor.component.html',
    styles: [],
    standalone: true,
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        TooltipModule,
        RequiredComponent,
        EditorModule,
    ]
})
export class SpiderlyEditorComponent extends BaseControl implements OnInit {
    @ViewChild(Editor) editor: Editor;
    @ViewChild(Tooltip) tooltip: Tooltip;

    constructor(
    ) { 
        super();
    }

    override ngOnInit(){
        super.ngOnInit();
    }

    onClick(){
        let editableArea: HTMLElement = this.editor.el.nativeElement.querySelector('.ql-editor');
        
        editableArea.onblur = () => {
            this.control.markAsDirty();
            this.tooltip.deactivate();
        };

        editableArea.onfocus = () => {
            if (this.errorMessageTooltipEvent == 'focus' ) {
                this.tooltip.activate();
            }
        };

        editableArea.onmouseover = () => {
            if (this.errorMessageTooltipEvent == 'hover' ) {
                this.tooltip.activate();
            }
        }
    }

}
