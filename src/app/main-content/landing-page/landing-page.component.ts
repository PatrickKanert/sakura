import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
    selector: 'app-landing-page',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class landingPageComponent {}
