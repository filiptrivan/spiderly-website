import { BaseEntity, Filter, FilterRule, FilterSortMeta, MimeTypes, Namebook } from 'spiderly';



export class Notification extends BaseEntity
{
    title?: string;
	description?: string;
	emailBody?: string;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;
	isMarkedAsRead?: boolean;

    constructor(
    {
        title,
		description,
		emailBody,
		version,
		id,
		createdAt,
		modifiedAt,
		isMarkedAsRead
    }:{
        title?: string;
		description?: string;
		emailBody?: string;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('Notification'); 

        this.title = title;
		this.description = description;
		this.emailBody = emailBody;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class NotificationSaveBody extends BaseEntity
{
    notificationDTO?: Notification;
	selectedRecipientsIds?: number[];
	unselectedRecipientsIds?: number[];
	areAllRecipientsSelected?: boolean;
	recipientsTableFilter?: Filter;
	isMarkedAsRead?: boolean;

    constructor(
    {
        notificationDTO,
		selectedRecipientsIds,
		unselectedRecipientsIds,
		areAllRecipientsSelected,
		recipientsTableFilter,
		isMarkedAsRead
    }:{
        notificationDTO?: Notification;
		selectedRecipientsIds?: number[];
		unselectedRecipientsIds?: number[];
		areAllRecipientsSelected?: boolean;
		recipientsTableFilter?: Filter;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('NotificationSaveBody'); 

        this.notificationDTO = notificationDTO;
		this.selectedRecipientsIds = selectedRecipientsIds;
		this.unselectedRecipientsIds = unselectedRecipientsIds;
		this.areAllRecipientsSelected = areAllRecipientsSelected;
		this.recipientsTableFilter = recipientsTableFilter;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class NotificationMainUIForm extends BaseEntity
{
    notificationDTO?: Notification;

    constructor(
    {
        notificationDTO
    }:{
        notificationDTO?: Notification;     
    } = {}
    ) {
        super('NotificationMainUIForm'); 

        this.notificationDTO = notificationDTO;
    }
}


export class Transaction extends BaseEntity
{
    userEmail?: string;
	amountPaid?: number;
	currency?: string;
	userDisplayName?: string;
	userId?: number;
	subscriptionDisplayName?: string;
	subscriptionId?: number;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        userEmail,
		amountPaid,
		currency,
		userDisplayName,
		userId,
		subscriptionDisplayName,
		subscriptionId,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        userEmail?: string;
		amountPaid?: number;
		currency?: string;
		userDisplayName?: string;
		userId?: number;
		subscriptionDisplayName?: string;
		subscriptionId?: number;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('Transaction'); 

        this.userEmail = userEmail;
		this.amountPaid = amountPaid;
		this.currency = currency;
		this.userDisplayName = userDisplayName;
		this.userId = userId;
		this.subscriptionDisplayName = subscriptionDisplayName;
		this.subscriptionId = subscriptionId;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class TransactionSaveBody extends BaseEntity
{
    transactionDTO?: Transaction;

    constructor(
    {
        transactionDTO
    }:{
        transactionDTO?: Transaction;     
    } = {}
    ) {
        super('TransactionSaveBody'); 

        this.transactionDTO = transactionDTO;
    }
}


export class TransactionMainUIForm extends BaseEntity
{
    transactionDTO?: Transaction;

    constructor(
    {
        transactionDTO
    }:{
        transactionDTO?: Transaction;     
    } = {}
    ) {
        super('TransactionMainUIForm'); 

        this.transactionDTO = transactionDTO;
    }
}


export class User extends BaseEntity
{
    email?: string;
	hasLoggedInWithExternalProvider?: boolean;
	isDisabled?: boolean;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        email,
		hasLoggedInWithExternalProvider,
		isDisabled,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        email?: string;
		hasLoggedInWithExternalProvider?: boolean;
		isDisabled?: boolean;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('User'); 

        this.email = email;
		this.hasLoggedInWithExternalProvider = hasLoggedInWithExternalProvider;
		this.isDisabled = isDisabled;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class UserSaveBody extends BaseEntity
{
    userDTO?: User;

    constructor(
    {
        userDTO
    }:{
        userDTO?: User;     
    } = {}
    ) {
        super('UserSaveBody'); 

        this.userDTO = userDTO;
    }
}


export class UserMainUIForm extends BaseEntity
{
    userDTO?: User;

    constructor(
    {
        userDTO
    }:{
        userDTO?: User;     
    } = {}
    ) {
        super('UserMainUIForm'); 

        this.userDTO = userDTO;
    }
}


export class UserNotification extends BaseEntity
{
    notificationDisplayName?: string;
	notificationId?: number;
	userDisplayName?: string;
	userId?: number;
	isMarkedAsRead?: boolean;

    constructor(
    {
        notificationDisplayName,
		notificationId,
		userDisplayName,
		userId,
		isMarkedAsRead
    }:{
        notificationDisplayName?: string;
		notificationId?: number;
		userDisplayName?: string;
		userId?: number;
		isMarkedAsRead?: boolean;     
    } = {}
    ) {
        super('UserNotification'); 

        this.notificationDisplayName = notificationDisplayName;
		this.notificationId = notificationId;
		this.userDisplayName = userDisplayName;
		this.userId = userId;
		this.isMarkedAsRead = isMarkedAsRead;
    }
}


export class UserNotificationSaveBody extends BaseEntity
{
    userNotificationDTO?: UserNotification;

    constructor(
    {
        userNotificationDTO
    }:{
        userNotificationDTO?: UserNotification;     
    } = {}
    ) {
        super('UserNotificationSaveBody'); 

        this.userNotificationDTO = userNotificationDTO;
    }
}


export class UserNotificationMainUIForm extends BaseEntity
{
    userNotificationDTO?: UserNotification;

    constructor(
    {
        userNotificationDTO
    }:{
        userNotificationDTO?: UserNotification;     
    } = {}
    ) {
        super('UserNotificationMainUIForm'); 

        this.userNotificationDTO = userNotificationDTO;
    }
}


export class UserSubscription extends BaseEntity
{
    stripeProductName?: string;
	stripeProductId?: string;
	apiKeyValue?: string;
	validFrom?: Date;
	validTo?: Date;
	canceled?: boolean;
	userDisplayName?: string;
	userId?: number;
	version?: number;
	id?: number;
	createdAt?: Date;
	modifiedAt?: Date;

    constructor(
    {
        stripeProductName,
		stripeProductId,
		apiKeyValue,
		validFrom,
		validTo,
		canceled,
		userDisplayName,
		userId,
		version,
		id,
		createdAt,
		modifiedAt
    }:{
        stripeProductName?: string;
		stripeProductId?: string;
		apiKeyValue?: string;
		validFrom?: Date;
		validTo?: Date;
		canceled?: boolean;
		userDisplayName?: string;
		userId?: number;
		version?: number;
		id?: number;
		createdAt?: Date;
		modifiedAt?: Date;     
    } = {}
    ) {
        super('UserSubscription'); 

        this.stripeProductName = stripeProductName;
		this.stripeProductId = stripeProductId;
		this.apiKeyValue = apiKeyValue;
		this.validFrom = validFrom;
		this.validTo = validTo;
		this.canceled = canceled;
		this.userDisplayName = userDisplayName;
		this.userId = userId;
		this.version = version;
		this.id = id;
		this.createdAt = createdAt;
		this.modifiedAt = modifiedAt;
    }
}


export class UserSubscriptionSaveBody extends BaseEntity
{
    userSubscriptionDTO?: UserSubscription;

    constructor(
    {
        userSubscriptionDTO
    }:{
        userSubscriptionDTO?: UserSubscription;     
    } = {}
    ) {
        super('UserSubscriptionSaveBody'); 

        this.userSubscriptionDTO = userSubscriptionDTO;
    }
}


export class UserSubscriptionMainUIForm extends BaseEntity
{
    userSubscriptionDTO?: UserSubscription;

    constructor(
    {
        userSubscriptionDTO
    }:{
        userSubscriptionDTO?: UserSubscription;     
    } = {}
    ) {
        super('UserSubscriptionMainUIForm'); 

        this.userSubscriptionDTO = userSubscriptionDTO;
    }
}

