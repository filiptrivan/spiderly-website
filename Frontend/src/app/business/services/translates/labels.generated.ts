import { Injectable } from '@angular/core';
import { TranslocoService } from '@jsverse/transloco';

@Injectable({
  providedIn: 'root',
})
export class TranslateLabelsGeneratedService {

    constructor(
        private translocoService: TranslocoService
    ) {
    }

    translate = (name: string): string => {
        switch(name) 
        {
            case 'user':
                return this.translocoService.translate('User');
            case 'email':
                return this.translocoService.translate('Email');
            case 'accessToken':
                return this.translocoService.translate('AccessToken');
            case 'refreshToken':
                return this.translocoService.translate('RefreshToken');
            case 'id':
                return this.translocoService.translate('Id');
            case 'version':
                return this.translocoService.translate('Version');
            case 'createdAt':
                return this.translocoService.translate('CreatedAt');
            case 'modifiedAt':
                return this.translocoService.translate('ModifiedAt');
            case 'code':
                return this.translocoService.translate('Code');
            case 'displayName':
                return this.translocoService.translate('DisplayName');
            case 'additionalColumnHeaders':
                return this.translocoService.translate('AdditionalColumnHeaders');
            case 'additionalDataStartColumn':
                return this.translocoService.translate('AdditionalDataStartColumn');
            case 'dataSheetName':
                return this.translocoService.translate('DataSheetName');
            case 'dataSheetName2':
                return this.translocoService.translate('DataSheetName2');
            case 'dataStartRow':
                return this.translocoService.translate('DataStartRow');
            case 'dataStartColumn':
                return this.translocoService.translate('DataStartColumn');
            case 'createNewDataRows':
                return this.translocoService.translate('CreateNewDataRows');
            case 'idToken':
                return this.translocoService.translate('IdToken');
            case 'browser':
                return this.translocoService.translate('Browser');
            case 'filters':
                return this.translocoService.translate('Filters');
            case 'first':
                return this.translocoService.translate('First');
            case 'rows':
                return this.translocoService.translate('Rows');
            case 'multiSortMeta':
                return this.translocoService.translate('MultiSortMeta');
            case 'additionalFilterIdInt':
                return this.translocoService.translate('AdditionalFilterIdInt');
            case 'additionalFilterIdLong':
                return this.translocoService.translate('AdditionalFilterIdLong');
            case 'value':
                return this.translocoService.translate('Value');
            case 'matchMode':
                return this.translocoService.translate('MatchMode');
            case 'operator':
                return this.translocoService.translate('Operator');
            case 'field':
                return this.translocoService.translate('Field');
            case 'order':
                return this.translocoService.translate('Order');
            case 'userEmail':
                return this.translocoService.translate('UserEmail');
            case 'token':
                return this.translocoService.translate('Token');
            case 'selectedIds':
                return this.translocoService.translate('SelectedIds');
            case 'totalRecordsSelected':
                return this.translocoService.translate('TotalRecordsSelected');
            case 'expireAt':
                return this.translocoService.translate('ExpireAt');
            case 'isMarkedAsRead':
                return this.translocoService.translate('IsMarkedAsRead');
            case 'title':
                return this.translocoService.translate('Title');
            case 'description':
                return this.translocoService.translate('Description');
            case 'emailBody':
                return this.translocoService.translate('EmailBody');
            case 'notificationDTO':
                return this.translocoService.translate('NotificationDTO');
            case 'selectedRecipientsIds':
                return this.translocoService.translate('SelectedRecipientsIds');
            case 'unselectedRecipientsIds':
                return this.translocoService.translate('UnselectedRecipientsIds');
            case 'areAllRecipientsSelected':
                return this.translocoService.translate('AreAllRecipientsSelected');
            case 'recipientsTableFilter':
                return this.translocoService.translate('RecipientsTableFilter');
            case 'data':
                return this.translocoService.translate('Data');
            case 'totalRecords':
                return this.translocoService.translate('TotalRecords');
            case 'name':
                return this.translocoService.translate('Name');
            case 'nameLatin':
                return this.translocoService.translate('NameLatin');
            case 'descriptionLatin':
                return this.translocoService.translate('DescriptionLatin');
            case 'permissionDTO':
                return this.translocoService.translate('PermissionDTO');
            case 'ipAddress':
                return this.translocoService.translate('IpAddress');
            case 'tokenString':
                return this.translocoService.translate('TokenString');
            case 'status':
                return this.translocoService.translate('Status');
            case 'message':
                return this.translocoService.translate('Message');
            case 'usersNamebookDTOList':
                return this.translocoService.translate('UsersNamebookDTOList');
            case 'roleDTO':
                return this.translocoService.translate('RoleDTO');
            case 'permissionsNamebookDTOList':
                return this.translocoService.translate('PermissionsNamebookDTOList');
            case 'role':
                return this.translocoService.translate('Role');
            case 'permission':
                return this.translocoService.translate('Permission');
            case 'rolePermissionDTO':
                return this.translocoService.translate('RolePermissionDTO');
            case 'selectedUsersIds':
                return this.translocoService.translate('SelectedUsersIds');
            case 'selectedPermissionsIds':
                return this.translocoService.translate('SelectedPermissionsIds');
            case 'amountPaid':
                return this.translocoService.translate('AmountPaid');
            case 'currency':
                return this.translocoService.translate('Currency');
            case 'subscription':
                return this.translocoService.translate('Subscription');
            case 'transactionDTO':
                return this.translocoService.translate('TransactionDTO');
            case 'hasLoggedInWithExternalProvider':
                return this.translocoService.translate('HasLoggedInWithExternalProvider');
            case 'isDisabled':
                return this.translocoService.translate('IsDisabled');
            case 'userDTO':
                return this.translocoService.translate('UserDTO');
            case 'notification':
                return this.translocoService.translate('Notification');
            case 'userNotificationDTO':
                return this.translocoService.translate('UserNotificationDTO');
            case 'userRoleDTO':
                return this.translocoService.translate('UserRoleDTO');
            case 'stripeProductName':
                return this.translocoService.translate('StripeProductName');
            case 'stripeProduct':
                return this.translocoService.translate('StripeProduct');
            case 'apiKeyValue':
                return this.translocoService.translate('ApiKeyValue');
            case 'validFrom':
                return this.translocoService.translate('ValidFrom');
            case 'validTo':
                return this.translocoService.translate('ValidTo');
            case 'canceled':
                return this.translocoService.translate('Canceled');
            case 'userSubscriptionDTO':
                return this.translocoService.translate('UserSubscriptionDTO');
            case 'verificationCode':
                return this.translocoService.translate('VerificationCode');
            default:
                return null;
        }
    }
}

