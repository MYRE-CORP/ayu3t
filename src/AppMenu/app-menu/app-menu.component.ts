import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrl: './app-menu.component.css',
  standalone: true,
  imports: [
    RouterLink
  ],
})
export class AppMenuComponent {

}
