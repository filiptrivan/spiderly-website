import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiSecurityService, Filter, PaginatedResult, Namebook, Codebook, LazyLoadSelectedIdsResult, VerificationTokenRequest, AuthResult, ExternalProvider } from 'spiderly';
import { ConfigService } from '../config.service';
import { Notification } from '../../entities/business-entities.generated';
import { NotificationSaveBody } from '../../entities/business-entities.generated';
import { NotificationMainUIForm } from '../../entities/business-entities.generated';
import { Transaction } from '../../entities/business-entities.generated';
import { TransactionSaveBody } from '../../entities/business-entities.generated';
import { TransactionMainUIForm } from '../../entities/business-entities.generated';
import { User } from '../../entities/business-entities.generated';
import { UserSaveBody } from '../../entities/business-entities.generated';
import { UserMainUIForm } from '../../entities/business-entities.generated';
import { UserNotification } from '../../entities/business-entities.generated';
import { UserNotificationSaveBody } from '../../entities/business-entities.generated';
import { UserNotificationMainUIForm } from '../../entities/business-entities.generated';
import { UserSubscription } from '../../entities/business-entities.generated';
import { UserSubscriptionSaveBody } from '../../entities/business-entities.generated';
import { UserSubscriptionMainUIForm } from '../../entities/business-entities.generated';

@Injectable({
    providedIn: 'root'
})
export class ApiGeneratedService extends ApiSecurityService {

    constructor(
        protected override http: HttpClient,
        protected override config: ConfigService
    ) {
        super(http, config);
    }

    sendNotificationEmail = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/SendNotificationEmail?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    deleteNotificationForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Notification/DeleteNotificationForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    markNotificationAsReadForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/MarkNotificationAsReadForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    markNotificationAsUnreadForCurrentUser = (notificationId: number, notificationVersion: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Notification/MarkNotificationAsUnreadForCurrentUser?notificationId=${notificationId}&notificationVersion=${notificationVersion}`, this.config.httpOptions);
    }

    getNotificationsForCurrentUser = (filterDTO: Filter): Observable<PaginatedResult<Notification>> => { 
        return this.http.post<PaginatedResult<Notification>>(`${this.config.apiUrl}/Notification/GetNotificationsForCurrentUser`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    createCheckoutSession = (): Observable<string> => { 
        return this.http.post(`${this.config.apiUrl}/Stripe/CreateCheckoutSession`, {}, { ...this.config.httpOptions, responseType: 'text' });
    }

    webhook = (): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Stripe/Webhook`, {}, { observe: 'response', responseType: 'blob' });
    }

    cancelSubscription = (subscriptionId: number): Observable<any> => { 
        return this.http.get(`${this.config.apiUrl}/Stripe/CancelSubscription?subscriptionId=${subscriptionId}`, this.config.httpOptions);
    }

    getCurrentUser = (): Observable<User> => { 
        return this.http.get<User>(`${this.config.apiUrl}/User/GetCurrentUser`, this.config.httpSkipSpinnerOptions);
    }

    getPaginatedNotificationList = (filterDTO: Filter): Observable<PaginatedResult<Notification>> => { 
        return this.http.post<PaginatedResult<Notification>>(`${this.config.apiUrl}/Notification/GetPaginatedNotificationList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportNotificationListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Notification/ExportNotificationListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getNotificationList = (): Observable<Notification[]> => { 
        return this.http.get<Notification[]>(`${this.config.apiUrl}/Notification/GetNotificationList`, this.config.httpOptions);
    }

    getNotificationMainUIFormDTO = (id: number): Observable<NotificationMainUIForm> => { 
        return this.http.get<NotificationMainUIForm>(`${this.config.apiUrl}/Notification/GetNotificationMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getNotification = (id: number): Observable<Notification> => { 
        return this.http.get<Notification>(`${this.config.apiUrl}/Notification/GetNotification?id=${id}`, this.config.httpOptions);
    }







    getPaginatedRecipientsListForNotification = (filterDTO: Filter): Observable<PaginatedResult<User>> => { 
        return this.http.post<PaginatedResult<User>>(`${this.config.apiUrl}/Notification/GetPaginatedRecipientsListForNotification`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportRecipientsListToExcelForNotification = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Notification/ExportRecipientsListToExcelForNotification`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    lazyLoadSelectedRecipientsIdsForNotification = (filterDTO: Filter): Observable<LazyLoadSelectedIdsResult> => { 
        return this.http.post<LazyLoadSelectedIdsResult>(`${this.config.apiUrl}/Notification/LazyLoadSelectedRecipientsIdsForNotification`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    saveNotification = (saveBodyDTO: NotificationSaveBody): Observable<NotificationSaveBody> => { 
        return this.http.put<NotificationSaveBody>(`${this.config.apiUrl}/Notification/SaveNotification`, saveBodyDTO, this.config.httpOptions);
    }



    deleteNotification = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Notification/DeleteNotification?id=${id}`, this.config.httpOptions);
    }


    getPaginatedTransactionList = (filterDTO: Filter): Observable<PaginatedResult<Transaction>> => { 
        return this.http.post<PaginatedResult<Transaction>>(`${this.config.apiUrl}/Transaction/GetPaginatedTransactionList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportTransactionListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/Transaction/ExportTransactionListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getTransactionList = (): Observable<Transaction[]> => { 
        return this.http.get<Transaction[]>(`${this.config.apiUrl}/Transaction/GetTransactionList`, this.config.httpOptions);
    }

    getTransactionMainUIFormDTO = (id: number): Observable<TransactionMainUIForm> => { 
        return this.http.get<TransactionMainUIForm>(`${this.config.apiUrl}/Transaction/GetTransactionMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getTransaction = (id: number): Observable<Transaction> => { 
        return this.http.get<Transaction>(`${this.config.apiUrl}/Transaction/GetTransaction?id=${id}`, this.config.httpOptions);
    }

    getUserAutocompleteListForTransaction = (limit: number, filter: string, transactionId?: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Transaction/GetUserAutocompleteListForTransaction?limit=${limit}&filter=${filter}&transactionId=${transactionId}`, this.config.httpSkipSpinnerOptions);
    }
    getSubscriptionAutocompleteListForTransaction = (limit: number, filter: string, transactionId?: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/Transaction/GetSubscriptionAutocompleteListForTransaction?limit=${limit}&filter=${filter}&transactionId=${transactionId}`, this.config.httpSkipSpinnerOptions);
    }








    saveTransaction = (saveBodyDTO: TransactionSaveBody): Observable<TransactionSaveBody> => { 
        return this.http.put<TransactionSaveBody>(`${this.config.apiUrl}/Transaction/SaveTransaction`, saveBodyDTO, this.config.httpOptions);
    }



    deleteTransaction = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/Transaction/DeleteTransaction?id=${id}`, this.config.httpOptions);
    }


    getPaginatedUserList = (filterDTO: Filter): Observable<PaginatedResult<User>> => { 
        return this.http.post<PaginatedResult<User>>(`${this.config.apiUrl}/User/GetPaginatedUserList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportUserListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/User/ExportUserListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getUserList = (): Observable<User[]> => { 
        return this.http.get<User[]>(`${this.config.apiUrl}/User/GetUserList`, this.config.httpOptions);
    }

    getUserMainUIFormDTO = (id: number): Observable<UserMainUIForm> => { 
        return this.http.get<UserMainUIForm>(`${this.config.apiUrl}/User/GetUserMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getUser = (id: number): Observable<User> => { 
        return this.http.get<User>(`${this.config.apiUrl}/User/GetUser?id=${id}`, this.config.httpOptions);
    }









    saveUser = (saveBodyDTO: UserSaveBody): Observable<UserSaveBody> => { 
        return this.http.put<UserSaveBody>(`${this.config.apiUrl}/User/SaveUser`, saveBodyDTO, this.config.httpOptions);
    }



    deleteUser = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/User/DeleteUser?id=${id}`, this.config.httpOptions);
    }




    getPaginatedUserSubscriptionList = (filterDTO: Filter): Observable<PaginatedResult<UserSubscription>> => { 
        return this.http.post<PaginatedResult<UserSubscription>>(`${this.config.apiUrl}/UserSubscription/GetPaginatedUserSubscriptionList`, filterDTO, this.config.httpSkipSpinnerOptions);
    }

    exportUserSubscriptionListToExcel = (filterDTO: Filter): Observable<any> => { 
        return this.http.post(`${this.config.apiUrl}/UserSubscription/ExportUserSubscriptionListToExcel`, filterDTO, { observe: 'response', responseType: 'blob' });
    }

    getUserSubscriptionList = (): Observable<UserSubscription[]> => { 
        return this.http.get<UserSubscription[]>(`${this.config.apiUrl}/UserSubscription/GetUserSubscriptionList`, this.config.httpOptions);
    }

    getUserSubscriptionMainUIFormDTO = (id: number): Observable<UserSubscriptionMainUIForm> => { 
        return this.http.get<UserSubscriptionMainUIForm>(`${this.config.apiUrl}/UserSubscription/GetUserSubscriptionMainUIFormDTO?id=${id}`, this.config.httpOptions);
    }

    getUserSubscription = (id: number): Observable<UserSubscription> => { 
        return this.http.get<UserSubscription>(`${this.config.apiUrl}/UserSubscription/GetUserSubscription?id=${id}`, this.config.httpOptions);
    }

    getUserAutocompleteListForUserSubscription = (limit: number, filter: string, userSubscriptionId?: number): Observable<Namebook[]> => { 
        return this.http.get<Namebook[]>(`${this.config.apiUrl}/UserSubscription/GetUserAutocompleteListForUserSubscription?limit=${limit}&filter=${filter}&userSubscriptionId=${userSubscriptionId}`, this.config.httpSkipSpinnerOptions);
    }








    saveUserSubscription = (saveBodyDTO: UserSubscriptionSaveBody): Observable<UserSubscriptionSaveBody> => { 
        return this.http.put<UserSubscriptionSaveBody>(`${this.config.apiUrl}/UserSubscription/SaveUserSubscription`, saveBodyDTO, this.config.httpOptions);
    }



    deleteUserSubscription = (id: number): Observable<any> => { 
        return this.http.delete(`${this.config.apiUrl}/UserSubscription/DeleteUserSubscription?id=${id}`, this.config.httpOptions);
    }


}
