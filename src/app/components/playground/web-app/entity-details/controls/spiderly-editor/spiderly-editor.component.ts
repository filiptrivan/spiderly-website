import { Component, Inject, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
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
    styleUrl: '../../../../../../pages/playground/playground.component.scss',
    styles: [],
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
        @Inject(PLATFORM_ID) protected override platformId: Object
    ) {
    super(platformId);
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
