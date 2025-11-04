import { Injectable, OnDestroy } from '@angular/core';
import { ApiSecurityService, InitTopBarData, LayoutBaseService } from 'spiderly';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '../config.service';
import { combineLatest, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService extends LayoutBaseService implements OnDestroy {

    constructor(
        protected override apiService: ApiSecurityService,
        protected override config: ConfigService,
        protected override authService: AuthService,
    ) {
        super(apiService, config, authService);

        this.initUnreadNotificationsCountForCurrentUser();
    }

    override initTopBarData = (): Observable<InitTopBarData> => {
        return combineLatest([this.authService.user$, this.unreadNotificationsCount$]).pipe(
            map(([currentUser, unreadNotificationsCount]) => {
                return new InitTopBarData({
                    companyName: this.config.companyName,
                    userProfilePath: `/users/${currentUser?.id}`,
                    unreadNotificationsCount: unreadNotificationsCount,
                    showProfileIcon: true,
                    currentUser: currentUser,
                });
            })
        );
    }
}

