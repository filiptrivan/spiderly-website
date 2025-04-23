import { BaseFormService, LastMenuIconIndexClicked } from '../../components/playground/web-app/entity-details/services/base-form.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../components/section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../components/playground/web-app/layout/layout.component';
import { SpiderlyClass } from '../../components/playground/entities/entities';
import { SpiderlyMenuItem } from '../../components/playground/web-app/sidebar/sidebar-menu.component';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { IndexCardComponent } from '../../components/playground/index-card/index-card.component';
import { SelectModule } from 'primeng/select';
import { PanelModule } from 'primeng/panel';
import { SpiderlyControlsModule } from '../../components/playground/web-app/entity-details/controls/spiderly-controls.module';
import { SpiderlyFormArray, SpiderlyFormGroup } from '../../components/playground/web-app/entity-details/spiderly-form-control/spiderly-form-control';
import { ClassFormComponent } from '../../components/playground/class-form/class-form.component';
import { getWarningMessageOptions, getSuccessMessageOptions } from '../../components/playground/web-app/entity-details/services/helper-functions';
import { Subject } from 'rxjs';
import { ClassCodeEditorComponent } from '../../components/playground/class-code-editor/class-code-editor.component';

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
    MenuModule,
    IndexCardComponent,
    SelectModule,
    PanelModule,
    ClassFormComponent,
    ClassCodeEditorComponent,
],
})
export class PlaygroundComponent {
  entitiesFormArray: SpiderlyFormArray<SpiderlyClass>;
  entitiesCrudMenu: MenuItem[];
  lastEntitiesMenuIconIndexClicked = new LastMenuIconIndexClicked({});
  entitiesCrudMenuRemoveHandler = new Subject<number>();

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
    private messageService: MessageService,
  ) {
        
  }

  ngOnInit(){
    const userEntity = new SpiderlyClass({
        name: 'User', 
        data: [
            {Id: 1, Name: 'Filip'}, 
            {Id: 2, Name: 'Aleksa'}, 
            {Id: 3, Name: 'Milica'}
        ],
        properties: [
            {name:'Id', dataType: 'string', attributes: []}, 
            {name: 'Name', dataType: 'string', attributes: []}, 
            {name: 'Logo', dataType: 'string', attributes: [{name: 'UIControlType', value: 'File'}]}
        ],
    });

    this.saveEntity(userEntity, null);

    this.entitiesFormArray = this.baseFormService.initFormArray(new SpiderlyClass({}), this.entities);
    this.entitiesCrudMenu = this.baseFormService.getCrudMenuForOrderedData(new SpiderlyClass({}), this.entitiesFormArray, this.lastEntitiesMenuIconIndexClicked, this.entitiesCrudMenuRemoveHandler);
    this.entitiesCrudMenuRemoveHandler.subscribe(index => {
      this.removeEntity(index);
    });
  }

  saveEntityFormGroup(formGroup: SpiderlyFormGroup<SpiderlyClass>, index: number) {
      if (this.baseFormService.checkFormGroupValidity(formGroup) === false) {
          return;
      }

      this.saveEntity(formGroup.value, index);
  }

  saveEntity(entity: SpiderlyClass, index?: number) {
      const sameNameDifferentIndexEntity = this.entities.find((x, i) => x.name === entity.name && i !== index);
      if (sameNameDifferentIndexEntity != null) {
          this.messageService.add(getWarningMessageOptions('You already have class with the same name.'))
          return;
      }
      
      const entityIndex = this.entities.findIndex(x => x.name == entity.name);
      
      entity.data = entity.data ?? [];

      this.entities.push(entity);
      this.menu.push({
          label: `${entity.name}List`,
          icon: `pi pi-list`,
          entity: entity,
      });

      if (entityIndex !== -1) {
          this.removeEntity(entityIndex);
          this.messageService.add(getSuccessMessageOptions('Successfully updated.'));
          return;
      }

      if (index != null) { // FT: index is null only when we manually push new entity at the begining of the program
          this.messageService.add(getSuccessMessageOptions('Successfully created.'));
      }
  }

  removeEntity(index: number) {
    this.entities = this.entities.filter((_, i) => i !== index);
    this.menu = this.menu.filter((_, i) => i !== index + 2); // FT: Because we always have home and separator as default ones
  }

  getFormArrayGroups<T>(formArray: SpiderlyFormArray<T>): SpiderlyFormGroup<T>[]{
    return this.baseFormService.getFormArrayGroups<T>(formArray);
  }

  addNewEntity() {
    this.baseFormService.addNewFormGroupToFormArray(this.entitiesFormArray, new SpiderlyClass({}), null);
  }

}
