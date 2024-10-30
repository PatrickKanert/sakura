import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { HowToOrderComponent } from "./main-content/how-to-order/how-to-order.component";
import { landingPageComponent } from './main-content/landing-page/landing-page.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    landingPageComponent,
    MainContentComponent,
    HowToOrderComponent,
    ImprintComponent,
    FooterComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sakura';
}
