import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DocsLayoutComponent } from '../../components/docs/layout/docs-layout.component';
import { DocsSpiderlyMenuItem } from '../../components/docs/layout/sidebar/docs-sidebar-menu.component';

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  imports: [
    CommonModule,
    DocsLayoutComponent,
],
})
export class DocsComponent {
    menu: DocsSpiderlyMenuItem[] = [
      {
        items: [
          {
            label: 'Getting Started', 
            icon: 'pi pi-fw pi-home', 
            routerLink: '/docs/getting-started',
          },
          {
            separator: true,
          },
          {
            label: 'Attributes', 
            icon: 'pi pi-fw pi-tag', 
            routerLink: '/docs/attributes',
            // items: [
            //   { label: 'Authorize', routerLink: 'authorize' },
            //   { label: 'BlobName', routerLink: 'blob-name' },
            //   { label: 'CascadeDelete', routerLink: 'cascade-delete' },
            //   { label: 'Controller', routerLink: 'controller' },
            //   { label: 'DisplayName', routerLink: 'display-name' },
            //   { label: 'ExcludeFromDTO', routerLink: 'exclude-from-dto' },
            //   { label: 'ExcludeServiceMethodsFromGeneration', routerLink: 'exclude-service-methods-from-generation' },
            //   { label: 'GenerateCommaSeparatedDisplayName', routerLink: 'generate-comma-separated-display-name' },
            //   { label: 'GreaterThanOrEqualTo', routerLink: 'greater-than-or-equal-to' },
            //   { label: 'IncludeInDTO', routerLink: 'include-in-dto' },
            //   { label: 'M2MEntity', routerLink: 'm2m-entity' },
            //   { label: 'M2MMaintanceEntity', routerLink: 'm2m-maintance-entity' },
            //   { label: 'ManyToOneRequired', routerLink: 'many-to-one-required' },
            //   { label: 'ProjectToDTO', routerLink: 'project-to-dto' },
            //   { label: 'SetNull', routerLink: 'set-null' },
            //   { label: 'SimpleManyToManyTableLazyLoad', routerLink: 'simple-many-to-many-table-lazy-load' },
            //   { label: 'UIAdditionalPermissionCodeForInsert', routerLink: 'ui-additional-permission-code-for-insert' },
            //   { label: 'UIAdditionalPermissionCodeForUpdate', routerLink: 'ui-additional-permission-code-for-update' },
            //   { label: 'WithMany', routerLink: 'with-many' },
            //   { label: 'UIControlType', routerLink: 'ui-control-type' },
            //   { label: 'UIControlWidth', routerLink: 'ui-control-width' },
            //   { label: 'UIDoNotGenerate', routerLink: 'ui-do-not-generate' },
            //   { label: 'UIOrderedOneToMany', routerLink: 'ui-ordered-one-to-many' },
            //   { label: 'UIPanel', routerLink: 'ui-panel' },
            //   { label: 'UIPropertyBlockOrder', routerLink: 'ui-property-block-order' },
            //   { label: 'UITableColumn', routerLink: 'ui-table-column' },
            //   { label: 'TranslateExcelEn', routerLink: 'translate-excel-en' },
            //   { label: 'TranslateExcelSrLatnRS', routerLink: 'translate-excel-sr-latn-rs' },
            //   { label: 'TranslatePluralEn', routerLink: 'translate-plural-en' },
            //   { label: 'TranslatePluralSrLatnRS', routerLink: 'translate-plural-sr-latn-rs' },
            //   { label: 'TranslateSingularEn', routerLink: 'translate-singular-en' },
            //   { label: 'TranslateSingularSrLatnRS', routerLink: 'translate-singular-sr-latn-rs' }
            // ]
          },
          // {
          //   label: 'Base entities', 
          //   icon: 'pi pi-fw pi-hammer', 
          //   items: [
          //     { label: 'BusinessObject', routerLink: 'business-object' },
          //     { label: 'ReadonlyObject', routerLink: 'readonly-object' },
          //   ]
          // },
          // {
          //   label: 'Emailing', 
          //   icon: 'pi pi-fw pi-envelope', 
          //   items: [
          //     { label: 'EmailingService', routerLink: 'emailing-service' },
          //   ]
          // },
          // {
          //   label: 'Enums', 
          //   icon: 'pi pi-fw pi-envelope',
          //   items: [
          //     { 
          //       label: 'UIControlTypeCodes', 
          //       routerLink: 'ui-control-type-codes',
          //       items: [
          //         { label: 'Decimal', routerLink: 'decimal' },
          //         { label: 'File', routerLink: 'file' },
          //         { label: 'Dropdown', routerLink: 'Dropdown' },
          //         { label: 'TextArea', routerLink: 'textarea' },
          //         { label: 'Autocomplete', routerLink: 'autocomplete' },
          //         { label: 'TextBox', routerLink: 'textbox' },
          //         { label: 'CheckBox', routerLink: 'checkbox' },
          //         { label: 'Calendar', routerLink: 'calendar' },
          //         { label: 'Integer', routerLink: 'integer' },
          //         { label: 'ColorPick', routerLink: 'colorpick' },
          //         { label: 'Editor', routerLink: 'editor' },
          //         { label: 'MultiAutocomplete', routerLink: 'multiautocomplete' },
          //         { label: 'MultiSelect', routerLink: 'multiselect' },
          //         { label: 'Password', routerLink: 'password' },
          //         { label: 'TextBlock', routerLink: 'textblock' },
          //       ]
          //     },
          //   ]
          // },
          // {
          //   label: 'Security', 
          //   icon: 'pi pi-fw pi-shield', 
          //   items: [

          //   ]
          // },
        ]
      }
    ];
  
  constructor(
    private titleService: Title, 
    private metaService: Meta
  ) {
    this.titleService.setTitle('Spiderly Docs - Frequently Asked Questions');
    this.metaService.updateTag({ name: 'description', content: 'Find answers to common questions about Spiderly - the powerful tool that instantly generates full-stack .NET (C#) + Angular applications from your C# classes.'});
    this.metaService.updateTag({ name: 'robots', content: 'index, follow' });
  }


}
