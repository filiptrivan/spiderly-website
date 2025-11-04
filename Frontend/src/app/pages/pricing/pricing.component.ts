import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { firstValueFrom } from 'rxjs';
import { createFakeGoogleWrapper } from 'spiderly';
import { ApiService } from 'src/app/business/services/api/api.service';
import { AuthService } from 'src/app/business/services/auth/auth.service';
import { SectionWrapperComponent } from 'src/app/components/section-wrapper/section-wrapper.component';

@Component({
    templateUrl: './pricing.component.html',
    styleUrl: './pricing.component.scss',
    imports: [
      ButtonModule,
      SectionWrapperComponent,
    ],
})
export class PricingComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private apiService: ApiService,
  ) {}

  ngOnInit() {

  }

  createCheckoutSession = async () => {
    this.authService.lastClickedExternalLoginButton = 'pricing';

    const user = await firstValueFrom(this.authService.user$);
    
    if (user == null) {
      createFakeGoogleWrapper().click();
    }
    else{
      this.apiService.createCheckoutSession().subscribe(redirectUrl => {
        if (redirectUrl) {
          window.location.href = redirectUrl;
        }
      });
    }

  }

}
