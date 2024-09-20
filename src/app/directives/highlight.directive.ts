import {Directive, ElementRef, input, Renderer2} from "@angular/core";

@Directive({
  standalone: true,
  selector: "[highlight]",
  host: {
    '(mouseenter)': '_onMouseEnter()',
    '(mouseleave)': '_onMouseLeave()',
  }
})

export class HighlightDirective {

  public color = input<string>("pink");

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  private _setBackGroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  protected _onMouseEnter() {
    this._setBackGroundColor(this.color());
  }

  protected _onMouseLeave() {
    this._setBackGroundColor('transparent');
  }

}
