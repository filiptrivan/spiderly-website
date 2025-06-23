import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { FooterComponent } from "./components/footer/footer.component";
import { ViewportScroller } from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    ToastModule,
    ConfirmDialogModule,
    FooterComponent,
],
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(
    private viewportScroller: ViewportScroller
  ) {
    viewportScroller.setOffset([0, 130]);
  }

}
