import {Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  standalone: true,
  selector: "[highlight]",
})

export class HighlightDirective {

  @Input() color = 'pink';

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private _setBackGroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this._setBackGroundColor(this.color);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this._setBackGroundColor('transparent');
  }
}
