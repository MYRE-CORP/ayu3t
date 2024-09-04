import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Card} from "../interfaces";
import {CommonModule} from "@angular/common";
import {products} from '../constants';

@Component({
    selector: 'app-card',
    templateUrl: './cardList.component.html',
    styleUrl: './cardList.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [CommonModule],
})
export class CardListComponent {
    @Input({required: true})
    public readonly cardList: Card[];

    protected _products = products;

    protected cardTrackBy(_: number, card: Card): number {
        return card.id;
    }
}
