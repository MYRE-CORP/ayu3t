import { ChangeDetectionStrategy, Component } from "@angular/core";
import { ProductComponent } from "./product/product.component";
import { CardListComponent } from "./card/cardList.component";
import { InputOutputComponent } from "./Exemple/input-output/input-output.component";
import { AppMenuComponent } from "../AppMenu/app-menu/app-menu.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ProductComponent,
    CardListComponent,
    InputOutputComponent,
    AppMenuComponent,
    RouterOutlet,
  ],
})
export class AppComponent {
  protected words = ["coucou", "bonjour", "salut"];

  protected _alertText(text: string) {
    alert(text);
  }
}
