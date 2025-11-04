import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, KeyValueDiffers, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslocoService } from '@jsverse/transloco';
import { ApiService } from 'src/app/business/services/api/api.service';
import { UserSubscription } from 'src/app/business/entities/business-entities.generated';
import { UserSubscriptionBaseDetailsComponent } from 'src/app/business/components/base-details/business-base-details.generated';
import { BaseFormCopy, SpiderlyFormGroup, SpiderlyMessageService, BaseFormService, SpiderlyPanelsModule, SpiderlyControlsModule, SpiderlyButton } from 'spiderly';
import { SectionWrapperComponent } from "../../components/section-wrapper/section-wrapper.component";
import { CommonModule } from '@angular/common';
import { copyToClipboard } from 'src/app/components/helpers/helper-functions';
import { ConfirmationService } from 'primeng/api';

@Component({
    selector: 'user-subscription-details',
    templateUrl: './user-subscription-details.component.html',
    imports: [
    SpiderlyPanelsModule,
    SpiderlyControlsModule,
    UserSubscriptionBaseDetailsComponent,
    SectionWrapperComponent,
    CommonModule,
]
})
export class UserSubscriptionDetailsComponent extends BaseFormCopy implements OnInit {
    userSubscriptionFormGroup = new SpiderlyFormGroup<UserSubscription>({});
    copyIcon = 'pi pi-copy';

    constructor(
        protected override differs: KeyValueDiffers,
        protected override http: HttpClient,
        protected override messageService: SpiderlyMessageService, 
        protected override changeDetectorRef: ChangeDetectorRef,
        protected override router: Router, 
        protected override route: ActivatedRoute,
        protected override translocoService: TranslocoService,
        protected override baseFormService: BaseFormService,
        private apiService: ApiService,
        private confirmationService: ConfirmationService,
    ) {
        super(differs, http, messageService, changeDetectorRef, router, route, translocoService, baseFormService);
    }

    override ngOnInit() {
        
    }

    override onBeforeSave = (): void => {

    }

    copyApiKey = () => {
        copyToClipboard(this.userSubscriptionFormGroup.controls.apiKeyValue.value);
        this.copyIcon = 'pi pi-check';

        setTimeout(() => {
            this.copyIcon = 'pi pi-copy';
        }, 2000);
    }

    openCancelSubscriptionConfirmationDialog = () => {
        this.confirmationService.confirm({
            accept: this.cancelSubscription,
        });
    }

    cancelSubscription = () => {
        this.apiService.cancelSubscription(this.userSubscriptionFormGroup.controls.id.value).subscribe(() => {
            this.messageService.successMessage('Your subscription has been successfully canceled.')
        });
    }
}