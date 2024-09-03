import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Product } from "../interfaces";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class CardComponent {
  @Input() cardList!: Product[];

  protected productTrackBy(index: number, product: { name: any }): void {
    return product.name;
  }
}
