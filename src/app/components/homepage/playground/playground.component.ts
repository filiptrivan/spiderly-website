import { BaseFormService } from './helpers/layout/playground-details/helpers/services/base-form.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './helpers/layout/layout.component';
import { SpiderlyClass } from './helpers/entities';
import { SpiderlyMenuItem } from './helpers/layout/sidebar/sidebar-menu.component';
import { SpiderlyControlsModule } from "./helpers/layout/playground-details/helpers/controls/spiderly-controls.module";
import { SpiderlyTextboxComponent } from "./helpers/layout/playground-details/helpers/controls/spiderly-textbox/spiderly-textbox.component";
import { SpiderlyFormGroup } from './helpers/layout/playground-details/helpers/spiderly-form-control/spiderly-form-control';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
  imports: [
    CommonModule,
    SectionWrapperComponent,
    ButtonModule,
    RouterModule,
    LayoutComponent,
    SpiderlyControlsModule,
    LayoutComponent,
    SpiderlyTextboxComponent
  ],
})
export class PlaygroundComponent {
  ocb: string = '{';
  ccb: string = '}';

  formGroup = new SpiderlyFormGroup({});

  entities: SpiderlyClass[] = [];
  menu: SpiderlyMenuItem[] = [
    {
        label: 'Home', 
        icon: 'pi pi-fw pi-home', 
    },
    {
        separator: true,
    }
  ];

  constructor(
    private baseFormService: BaseFormService,
  ) {
        
  }

  ngOnInit(){
    const userEntity = {
      name: 'User', 
      data: [
        {Id: 1, Name: 'Filip'}, 
        {Id: 2, Name: 'Aleksa'}, 
        {Id: 3, Name: 'Milica'}
      ],
      properties: [
          {name:'Id', type: 'string', attributes: []}, 
          {name: 'Name', type: 'string', attributes: []}, 
          {name: 'Logo', type: 'string', attributes: [{name: 'UIControlType', value: 'File'}]}
      ],
      attributes: []
    };

    this.entities.push(userEntity);
    this.menu.push({
      label: `${userEntity.name}List`,
      icon: `pi pi-list`,
      entity: userEntity,
    });

    this.baseFormService.addFormGroup(this.formGroup, new SpiderlyFormGroup({}), userEntity, null);
  }
}
