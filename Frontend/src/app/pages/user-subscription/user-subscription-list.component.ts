import { ApiService } from 'src/app/business/services/api/api.service';
import { TranslocoService } from '@jsverse/transloco';
import { Component, OnInit } from '@angular/core';
import { UserSubscription } from 'src/app/business/entities/business-entities.generated';
import { Column, SpiderlyDataTableComponent } from 'spiderly';
import { SectionWrapperComponent } from "../../components/section-wrapper/section-wrapper.component";

@Component({
    selector: 'user-subscription-list',
    templateUrl: './user-subscription-list.component.html',
    imports: [
    SpiderlyDataTableComponent,
    SectionWrapperComponent
]
})
export class UserSubscriptionListComponent implements OnInit {
    cols: Column<UserSubscription>[];

    getPaginatedUserSubscriptionListObservableMethod = this.apiService.getPaginatedUserSubscriptionList;
    exportUserSubscriptionListToExcelObservableMethod = this.apiService.exportUserSubscriptionListToExcel;
    deleteUserSubscriptionObservableMethod = this.apiService.deleteUserSubscription;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: 'Name', filterType: 'text', field: 'stripeProductName'},
            {name: 'Valid From', filterType: 'date', field: 'validFrom', showTime: true, showMatchModes: true},
            {name: 'C A', filterType: 'date', field: 'createdAt', showTime: true},
            {name: 'Valid To', filterType: 'date', field: 'validTo', showTime: true},
            {actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
            ]},
        ]
    }
}