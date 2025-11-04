import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FooterComponent } from "./components/footer/footer.component";
import { ViewportScroller } from "@angular/common";
import { TranslocoDirective } from '@jsverse/transloco';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PrimeNG } from 'primeng/config';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ToastModule,
    ConfirmDialogModule,
    FooterComponent,
    TranslocoDirective,
    NgxSpinnerModule,
],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private viewportScroller: ViewportScroller,
    private primengConfig: PrimeNG,
  ) {
    viewportScroller.setOffset([0, 130]);
    primengConfig.ripple.set(true);
  }

}
