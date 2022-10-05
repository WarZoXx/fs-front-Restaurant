import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCouleurMoyenne]'
})
export class CouleurMoyenneDirective {

  @Input('appCouleurMoyenneDirective')
  set moyenne(moyenne: string){
    if (parseInt(moyenne)>=2) {
      this._renderer.setStyle(this._el.nativeElement, 'color', 'yellow')
    } else {
      this._renderer.setStyle(this._el.nativeElement, 'color', 'red')
    }
  }

  constructor(private _el: ElementRef, private _renderer: Renderer2) { }

}
