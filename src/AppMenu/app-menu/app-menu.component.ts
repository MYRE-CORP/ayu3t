import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-app-menu',
    standalone: true,
    imports: [
        RouterLink
    ],
    templateUrl: './app-menu.component.html',
    styleUrl: './app-menu.component.css'
})
export class AppMenuComponent {

}
