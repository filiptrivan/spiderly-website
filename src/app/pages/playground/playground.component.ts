import { BaseFormService, LastMenuIconIndexClicked } from '../../components/playground/web-app/entity-details/services/base-form.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionWrapperComponent } from "../../components/section-wrapper/section-wrapper.component";
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from '../../components/playground/web-app/layout/layout.component';
import { SpiderlyClass, SpiderlyProperty } from '../../components/playground/entities/entities';
import { SpiderlyMenuItem } from '../../components/playground/web-app/sidebar/sidebar-menu.component';
import { MenuModule } from 'primeng/menu';
import { MenuItem, MessageService } from 'primeng/api';
import { IndexCardComponent } from '../../components/playground/index-card/index-card.component';
import { SelectModule } from 'primeng/select';
import { PanelModule } from 'primeng/panel';
import { SpiderlyControlsModule } from '../../components/playground/web-app/entity-details/controls/spiderly-controls.module';
import { SpiderlyFormArray, SpiderlyFormGroup } from '../../components/playground/web-app/entity-details/spiderly-form-control/spiderly-form-control';
import { ClassFormComponent } from '../../components/playground/class-form/class-form.component';
import { getWarningMessageOptions, getSuccessMessageOptions, getEntityPluralName } from '../../components/playground/web-app/entity-details/services/helper-functions';
import { Subject } from 'rxjs';
import { ClassCodeEditorComponent } from '../../components/playground/class-code-editor/class-code-editor.component';
import { CSharpDataTypeCodes, EntityAttributeCodes, getCSharpDataTypeOptions, PropertyAttributeCodes, UIControlTypeCodes, UIControlWidthCodes } from '../../components/playground/class-form/services/get-options-functions';
import { PrimengOption } from '../../components/playground/web-app/entity-details/entities/primeng-option';
import { Meta, Title } from '@angular/platform-browser';

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
  cSharpDataTypeOptions: PrimengOption[] = getCSharpDataTypeOptions();

  constructor(
    private baseFormService: BaseFormService,
    private messageService: MessageService,
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.titleService.setTitle('Spiderly Playground - Generate and Explore Generator');
    this.metaService.updateTag({ name: 'description', content: 'Explore the Spiderly Library Playground to instantly generate .NET (C#) + Angular web apps from your C# classes. Test and experiment with automatic boilerplate code updates.' });
  }

  ngOnInit(){
    const userEntity = new SpiderlyClass({
        name: 'User',
        attributes: [
          {name: EntityAttributeCodes.TranslatePluralEn, value: 'Users'}
        ],
        properties: [
          {name:'Id', dataType: CSharpDataTypeCodes.Long, attributes: [{name: PropertyAttributeCodes.Required}]}, 
          {name: 'Name', dataType: CSharpDataTypeCodes.String, attributes: [{name: PropertyAttributeCodes.DisplayName}, {name: PropertyAttributeCodes.Required}]}, 
          {name: 'Gender', dataType: 'Gender', attributes: [{name: PropertyAttributeCodes.UIControlWidth, value: UIControlWidthCodes._12}]},
          {name: 'Logo', dataType: CSharpDataTypeCodes.String, attributes: [{name: PropertyAttributeCodes.UIControlType, value: UIControlTypeCodes.File}]},
        ],
        data: [
            {Id: 1, Name: 'John', Gender: '0'}, 
            {Id: 2, Name: 'Alice', Gender: '1'}, 
            {Id: 3, Name: 'Bob'}
        ],
        collapsed: true
    });
    const genderEntity = new SpiderlyClass({
        name: 'Gender', 
        attributes: [
          {name: EntityAttributeCodes.TranslatePluralEn, value: 'Genders'}
        ],
        properties: [
          {name:'Id', dataType: CSharpDataTypeCodes.Long, attributes: [{name: PropertyAttributeCodes.Required}]}, 
          {name: 'Name', dataType: CSharpDataTypeCodes.String, attributes: [{name: PropertyAttributeCodes.DisplayName}, {name: PropertyAttributeCodes.Required}]}, 
        ],
        data: [
            {Id: 1, Name: 'Male'}, 
            {Id: 2, Name: 'Female'}, 
        ],
        collapsed: true
    });

    this.saveEntity(userEntity, null);
    this.saveEntity(genderEntity, null);

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

      if (entity.properties.length !== new Set(entity.properties.map(x => x.name)).size) {
        this.messageService.add(getWarningMessageOptions('You have multiple properties with the same name.'))
        return;
      }
      
      const entityAlreadyExists = this.entities.some((_, i) => i === index);
      if (entityAlreadyExists) {
        this.removeEntity(index);
        this.cSharpDataTypeOptions = this.cSharpDataTypeOptions.filter(dataType => dataType.label !== entity.name);
      }

      entity.data = entity.data ?? [];

      const menuLabel = getEntityPluralName(entity);

      const menuIcon = 'pi pi-list';
      
      if (index != null) {
        this.entities.splice(index, 0, entity);
        this.menu.splice(index + 2, 0, {
          label: menuLabel,
          icon: menuIcon,
          entity: entity,
        });
      } else {
        this.entities.push(entity);
        this.menu.push({
            label: menuLabel,
            icon: menuIcon,
            entity: entity,
        });
      }

      if (index != null) { // FT: index is null only when we manually push new entity at the begining of the program
          this.messageService.add(getSuccessMessageOptions('Successfully saved'));
      }

      this.cSharpDataTypeOptions.push({label: entity.name, value: entity.name});
  }

  removeEntity(index: number) {
    const entityForDelete = this.entities.find((_, i) => i === index);
    this.entities = this.entities.filter((_, i) => i !== index);
    this.entities.forEach(entity => {
      entity.properties = entity.properties.filter(property => property.dataType !== entityForDelete.name)
    });
    this.entitiesFormArray.controls.forEach((entityFormGroup: SpiderlyFormGroup<SpiderlyClass>) => {
      const propertiesFormArray = entityFormGroup.controls.properties;

      for (let i = propertiesFormArray.length - 1; i >= 0; i--) {
        const propertyFormGroup = propertiesFormArray.at(i) as SpiderlyFormGroup<SpiderlyProperty>;
        const dataType = propertyFormGroup.controls.dataType.value;
        if (dataType === entityForDelete.name) {
          propertiesFormArray.removeAt(i);
        }
      }
    });
    this.menu = this.menu.filter((_, i) => i !== index + 2); // FT: Because we always have home and separator as default ones
  }

  getFormArrayGroups<T>(formArray: SpiderlyFormArray<T>): SpiderlyFormGroup<T>[]{
    return this.baseFormService.getFormArrayGroups<T>(formArray);
  }

  addNewEntity() {
    this.baseFormService.addNewFormGroupToFormArray(this.entitiesFormArray, new SpiderlyClass({}), null);
  }

}
