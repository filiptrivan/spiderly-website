import { EventEmitter, Inject, Input, LOCALE_ID, OnInit, Output } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../layout.service';
import { CommonModule, formatDate } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { SpiderlyProperty } from '../../entities';
import { TooltipModule } from 'primeng/tooltip';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { ConfirmationService, MessageService } from 'primeng/api';

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
          .p-datatable-header{
            border-radius: 10px 10px 0 0;
          }
          .p-paginator{
            border-style: solid;
            border-color: var(--p-datatable-header-border-color);
            border-width: 0px 2px 2px 2px;
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
    @Input() cols: SpiderlyProperty[] = [];
    @Input() tableTitle: string;

    @Output() onNavigateToDetails = new EventEmitter<number>();

    constructor(
        public layoutService: LayoutService, 
        @Inject(LOCALE_ID) private locale: string,
        private confirmationService: ConfirmationService,
        private messageService: MessageService,
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

    navigateToDetails(index: number) {
      this.onNavigateToDetails.next(index);
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

    getStyleForBodyColumn(col: SpiderlyProperty) {
      switch(col.dataType){
        case 'long':
        case 'int':
        case 'byte':
          return 'text-align: right;';
        default:
          return null;
      }
    }

    getRowData(rowData: any, col: SpiderlyProperty): string{
      switch (col.dataType) {
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

  editRow(index: number) {
    this.navigateToDetails(index)
  }

  deleteRow(index: number) {
    this.confirmationService.confirm({
      accept: () => {
        this.data = this.data.filter((_, i) => i !== index);

        this.messageService.add({
          severity: 'success',
          summary: 'Item deleted successfully',
        });
      }
    });
  }
    
}
