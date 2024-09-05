import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductComponent} from "./product/product.component";
import {CardListComponent} from "./card/cardList.component";
import {AsyncPipe, NgForOf} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [RouterOutlet, ProductComponent, CardListComponent, NgForOf, AsyncPipe],
})

export class AppComponent {

}
