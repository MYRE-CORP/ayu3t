import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {Card} from "../interfaces";
import { CommonModule } from "@angular/common";
import { products } from '../constants';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  @Input() cardList!: Card[];
  protected _products = products;

  protected cardTrackBy(index: number, card: Card): number {
    return card.id;
  }
}
