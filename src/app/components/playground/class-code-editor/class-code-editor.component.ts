import { BaseFormService } from './../web-app/entity-details/services/base-form.service';
import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { SpiderlyFormGroup } from '../web-app/entity-details/spiderly-form-control/spiderly-form-control';
import { SpiderlyClass } from '../entities/entities';


@Component({
  selector: 'app-class-code-editor',
  templateUrl: './class-code-editor.component.html',
  styleUrl: './class-code-editor.component.scss',
  imports: [
    CommonModule,
],
})
export class ClassCodeEditorComponent {
  @Input() entityFormGroup: SpiderlyFormGroup<SpiderlyClass>;
  
  ocb: string = '{';
  ccb: string = '}';

  
  constructor(
    public baseFormService: BaseFormService
  ) {
        
  }

  ngOnInit(){
    
  }

  

}
