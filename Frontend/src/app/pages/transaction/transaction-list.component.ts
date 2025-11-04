import { ApiService } from '../../business/services/api/api.service';
import { TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/business/entities/business-entities.generated';
import { Column, SpiderlyDataTableComponent } from 'spiderly';
import { SectionWrapperComponent } from 'src/app/components/section-wrapper/section-wrapper.component';

@Component({
    selector: 'transaction-list',
    templateUrl: './transaction-list.component.html',
    imports: [
        SpiderlyDataTableComponent,
        SectionWrapperComponent,
    ]
})
export class TransactionListComponent implements OnInit {
    cols: Column<Transaction>[];

    getPaginatedTransactionListObservableMethod = this.apiService.getPaginatedTransactionList;
    exportTransactionListToExcelObservableMethod = this.apiService.exportTransactionListToExcel;
    deleteTransactionObservableMethod = this.apiService.deleteTransaction;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: 'Amount ($)', filterType: 'numeric', field: 'amountPaid', showMatchModes: true},
            {name: 'Currency', filterType: 'text', field: 'currency', showMatchModes: true},
            {name: 'Subscription', filterType: 'text', field: 'subscriptionDisplayName', showMatchModes: true},
            {name: this.translocoService.translate('CreatedAt'), filterType: 'date', field: 'createdAt', showTime: true, showMatchModes: true},
        ]
    }
}

