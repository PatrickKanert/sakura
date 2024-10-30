import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FindUsAtComponent } from "./find-us-at/find-us-at.component";
import { HowToOrderComponent } from './how-to-order/how-to-order.component';
import { landingPageComponent } from './landing-page/landing-page.component';
import { OurMenuComponent } from './our-menu/our-menu.component';

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [
    CommonModule,
    landingPageComponent,
    HowToOrderComponent,
    OurMenuComponent,
    FindUsAtComponent
],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
