import { Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../layout/layout.service';
import { CommonModule, formatDate } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SpiderProperty } from '../entities';
import { TooltipModule } from 'primeng/tooltip';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss',
    styles: [`
      :host {
        ::ng-deep {
          .p-datatable-thead{
            position: unset !important;
          }
          .p-datatable-filter-overlay{
            margin-left: -240px;
            top: 215px;
            z-index: 996;
          }
          .p-datatable{
            position: unset;
          }
        }
      }
    `],
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
    @Input() cols: SpiderProperty[] = [];
    @Input() tableTitle: string;

    constructor(
        public layoutService: LayoutService, 
        @Inject(LOCALE_ID) private locale: string
    ) {
    }


    ngOnInit() {
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

    navigateToDetails(id: number) {
      throw new Error('Method not implemented.');
    }

    getColHeaderWidth(filterType: string) {
        switch (filterType) {
          case 'string':
            return 'min-width: 12rem;';
          case 'DateTime':
            return 'min-width: 10rem;';
          case 'bool':
            return 'min-width: 8rem;';
          case 'long':
          case 'int':
          case 'byte':
            return 'min-width: 12rem;';
          default:
            return 'width: 0rem;'; // fitting content of the row like this
        }
    }

    getStyleForBodyColumn(col: SpiderProperty) {
      switch(col.type){
        case 'long':
        case 'int':
        case 'byte':
          return 'text-align: right;';
        default:
          return null;
      }
    }

    getRowData(rowData: any, col: SpiderProperty): string{
      switch (col.type) {
        case 'string':
          return rowData[col.name];
        case 'DateTime':
          if (rowData[col.name] == null)
            return null;
          return formatDate(rowData[col.name], 'dd.MM.yyyy. HH:mm', this.locale);
        case 'multiselect':
          return rowData[col.name];
        case 'bool':
          return rowData[col.name] == true ? 'Yes' : 'No';
        case 'long':
        case 'int':
        case 'byte':
          return rowData[col.name];
        default:
          return null;
      }
  }

  editRow(rowData: any) {
    throw new Error('Method not implemented.');
  }

  deleteRow(rowData: any) {
    throw new Error('Method not implemented.');
  }
    
}
