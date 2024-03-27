import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChecked]'
})
export class CheckedDirective implements OnInit{

  @Input()
  public string: Array<String>;

   private paragraph;

  constructor(private el: ElementRef, private renderer: Renderer2)
  {
     this.paragraph = this.renderer.createElement('li');
     this.string = ["Wiedźmin1, Wiedźmin2 Zabójcy Królów, Wiedźmin 3 GOTY"];
  }

  ngOnInit(): void {

      let li = this.el.nativeElement;
      this.renderer.setStyle(li, 'backgrund', 'gray');

  }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event){
    this.paragraph.innerHTML = this.string;
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    this.renderer.appendChild(this.el.nativeElement, this.paragraph);
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event){
    this.renderer.removeStyle(this.el.nativeElement, 'color');
    this.renderer.removeChild(this.el.nativeElement, this.paragraph);
  }

}
