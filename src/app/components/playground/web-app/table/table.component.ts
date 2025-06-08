import { EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SpiderlyClass, SpiderlyProperty } from '../../entities/entities';
import { TooltipModule } from 'primeng/tooltip';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ConfirmationService, MessageService } from 'primeng/api';
import { getSuccessMessageOptions, initDropdownOptions } from '../entity-details/services/helper-functions';
import { PlaygroundLayoutService } from '../layout/playground-layout.service';
import { CSharpDataTypeCodes } from '../../class-form/services/get-options-functions';
import { PrimengOption } from '../entity-details/entities/primeng-option';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    styles: [],
    standalone: true,
    imports: [
        CommonModule,
        TableModule,
        ButtonModule,
        TooltipModule,
    ]
})
export class TableComponent implements OnInit {
    @Input() data: any[] = [];
    @Input() entity: SpiderlyClass;
    @Input() entities: SpiderlyClass[] = [];
    @Input() cols: SpiderlyProperty[] = [];
    @Input() tableTitle: string;
    dropdownOptions: { [key: string]: PrimengOption[] } = {};

    @Output() onNavigateToDetails = new EventEmitter<number>();

    constructor(
        public layoutService: PlaygroundLayoutService, 
        @Inject(LOCALE_ID) private locale: string,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
    ) {
    }


    ngOnInit() {
      this.dropdownOptions = initDropdownOptions(this.entities);
    }

    exportListToExcel() {
      if (!this.data || this.data.length === 0) {
        console.warn('No data to export');
        return;
      }
    
      const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
      const workbook: XLSX.WorkBook = {
        Sheets: { 'Sheet1': worksheet },
        SheetNames: ['Sheet1']
      };
    
      const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
      const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
      FileSaver.saveAs(blob, `${this.tableTitle}.xlsx`);
    }

    navigateToDetails(index: number) {
      this.onNavigateToDetails.next(index);
    }

    getColHeaderWidth(filterType: string) {
        switch (filterType) {
          case CSharpDataTypeCodes.String:
            return 'min-width: 12rem;';
          case CSharpDataTypeCodes.DateTime:
            return 'min-width: 10rem;';
          case CSharpDataTypeCodes.Bool:
            return 'min-width: 8rem;';
          case CSharpDataTypeCodes.Long:
          case CSharpDataTypeCodes.Int:
          case CSharpDataTypeCodes.Byte:
          case CSharpDataTypeCodes.Decimal:
            return 'min-width: 12rem;';
          default:
            return 'width: 0rem;'; // fitting content of the row like this
        }
    }

    getStyleForBodyColumn(col: SpiderlyProperty) {
      switch(col.dataType){
        case CSharpDataTypeCodes.Long:
        case CSharpDataTypeCodes.Int:
        case CSharpDataTypeCodes.Byte:
        case CSharpDataTypeCodes.Decimal:
          return 'text-align: right;';
        default:
          return null;
      }
    }

    getRowData(rowData: any, col: SpiderlyProperty) {
      switch (col.dataType) {
        case CSharpDataTypeCodes.String:
          if (rowData[col.name] != null && typeof rowData[col.name] === 'object') { // FT HACK: UIControlType File
            return rowData[col.name].name;
          }
          return rowData[col.name];
        case CSharpDataTypeCodes.DateTime:
          if (rowData[col.name] == null)
            return null;
          return formatDate(rowData[col.name], 'dd.MM.yyyy. HH:mm', this.locale);
        case CSharpDataTypeCodes.Bool:
          return rowData[col.name] == true ? 'Yes' : 'No';
        case CSharpDataTypeCodes.Long:
        case CSharpDataTypeCodes.Int:
        case CSharpDataTypeCodes.Byte:
          return rowData[col.name];
        case CSharpDataTypeCodes.Decimal:
          return rowData[col.name];
        default:          
          const dataItemIndex = rowData[col.name];

          if (dataItemIndex == null) {
            return null
          }

          return this.dropdownOptions[col.dataType].find(x => x.value === dataItemIndex).label;
      }
  }

  editRow(index: number) {
    this.navigateToDetails(index)
  }

  deleteRow(index: number) {
    this.confirmationService.confirm({
      accept: () => {
        const entitiesChangedBecauseManyToOne = this.manyToOneSetToNull(index);

        this.data.splice(index, 1);

        if (entitiesChangedBecauseManyToOne) {
          this.dropdownOptions = initDropdownOptions(this.entities);
        }

        this.messageService.add(getSuccessMessageOptions('Item deleted successfully', null, 'playground'));
      }
    });
  }

  manyToOneSetToNull = (index: number) => {
    let entitiesChangedBecauseManyToOne: boolean = false;

    this.entities.forEach(entity => {
      entity.properties.forEach(property => {
        if (property.dataType === this.entity.name) {
          entity.data.forEach(dataRow => {
            if (dataRow[property.name] == index) {
              dataRow[property.name] = null;
              entitiesChangedBecauseManyToOne = true;
            }
            if (<number>dataRow[property.name] > index) {
              dataRow[property.name] = (<number>dataRow[property.name] - 1).toString();
              entitiesChangedBecauseManyToOne = true;
            }
          });
        }
      });
    });

    return entitiesChangedBecauseManyToOne;
  }
    
}
