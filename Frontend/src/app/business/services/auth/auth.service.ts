import { Inject, Injectable, OnDestroy, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { AuthBaseService, ConfigBaseService } from 'spiderly';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends AuthBaseService implements OnDestroy {
  public lastClickedExternalLoginButton: 'header' | 'pricing';

  constructor(
    protected override router: Router,
    protected override http: HttpClient,
    protected override externalAuthService: SocialAuthService,
    protected override apiService: ApiService,
    protected override config: ConfigBaseService,
    @Inject(PLATFORM_ID) protected override platformId: Object
  ) {
    super(router, http, externalAuthService, apiService, config, platformId);
  }

  override onAfterLoginExternal = () => {
    if (this.lastClickedExternalLoginButton === 'pricing') {
      this.apiService.createCheckoutSession().subscribe(redirectUrl => {
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      });
    }
  }

}
