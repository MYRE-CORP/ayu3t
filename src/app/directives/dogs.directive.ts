import {AfterViewInit, Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  standalone: true,
  selector: "[dog]",
})

export class DogDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.replaceEuroWithDog(this.el.nativeElement);

    const observer = new MutationObserver(() => {
      this.replaceEuroWithDog(this.el.nativeElement);
    });

    observer.observe(this.el.nativeElement, {childList: true, subtree: true});
  }

  private replaceEuroWithDog(element: HTMLElement) {
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);

    let node;
    while ((node = walker.nextNode())) {
      node.textContent = node.textContent?.replace(/€/g, '🐶');
    }
  }
}

