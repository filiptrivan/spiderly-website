import { Component, OnInit } from '@angular/core';
import { TranslocoDirective, TranslocoService } from '@jsverse/transloco';
import { ApiService } from 'src/app/business/services/api/api.service';
import { Column, Role, SpiderlyDataTableComponent } from 'spiderly';

@Component({
    selector: 'role-list',
    templateUrl: './role-list.component.html',
    imports: [
        TranslocoDirective,
        SpiderlyDataTableComponent
    ]
})
export class RoleListComponent implements OnInit {
    cols: Column<Role>[];

    getPaginatedRoleListObservableMethod = this.apiService.getPaginatedRoleList;
    exportRoleListToExcelObservableMethod = this.apiService.exportRoleListToExcel;
    deleteRoleObservableMethod = this.apiService.deleteRole;

    constructor(
        private apiService: ApiService,
        private translocoService: TranslocoService,
    ) { }

    ngOnInit(){
        this.cols = [
            {name: this.translocoService.translate('Name'), filterType: 'text', field: 'name'},
            {name: this.translocoService.translate('CreatedAt'), filterType: 'date', field: 'createdAt', showMatchModes: true},
            {actions:[
                {name: this.translocoService.translate('Details'), field: 'Details'},
                {name: this.translocoService.translate('Delete'), field: 'Delete'},
            ]},
        ]
    }
}

