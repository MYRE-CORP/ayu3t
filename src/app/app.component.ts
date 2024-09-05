import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ProductComponent} from './product/product.component';
import {CardListComponent} from './card/cardList.component';
import {InputOutputComponent} from "./Exemple/input-output/input-output.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ProductComponent, CardListComponent, InputOutputComponent],
})

export class AppComponent {
    protected texts: string[] = ['coucou', 'bonjour', 'salut'];

    protected _alertText(text: string) {
        alert(text);
    }
}
