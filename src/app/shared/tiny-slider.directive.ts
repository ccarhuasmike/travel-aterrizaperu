import { Directive, ElementRef, Input, afterNextRender, inject } from '@angular/core';

declare const tns: (options: Record<string, unknown>) => unknown;

/** Initializes a Tiny Slider carousel on the host element once it is rendered in the browser. */
@Directive({
  selector: '[appTinySlider]',
  standalone: true,
})
export class TinySliderDirective {
  @Input('appTinySlider') options: Record<string, unknown> = {};

  private readonly elementRef = inject(ElementRef<HTMLElement>);

  constructor() {
    afterNextRender(() => {
      if (typeof tns === 'function') {
        tns({ container: this.elementRef.nativeElement, ...this.options });
      }
    });
  }
}
