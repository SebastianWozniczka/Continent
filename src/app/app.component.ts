import { CheckedDirective } from './shared/checked.directive';
import { ChangeDetectionStrategy, Component, Injectable, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

@Injectable()
export class AppComponent implements OnInit{

  items = Array.from({length: 1}).map((_, i) => `Item #${i}`);

click() {
  this.clickVid = true;

}
video1() {
    if(this.clickVid){
setTimeout(() => {
  this.remove();
}, 1000);
    }
}

  public s!: Array<String>;

  @Input()
  toolbar2: Array<String> = ["Gry"];
  tootlbar: Array<String> =
  ["Alchemia","Bestiariusz","Bohaterowie","Ulepszenia","Ekwipunek","Potwory","Zadania"];
  _string!: Array<String>;
  hover!: Boolean;
  clickVid!: Boolean;

  constructor(private checkedDirective: CheckedDirective){
      this._string = checkedDirective.string;
     // setTimeout(() => {
        //this.remove();
      //}, 1000);
}

add(toolbar2:Array<String>) {
  toolbar2 = ["Wiedźmin 1, Wiedźmin 2 Zabójcy Królów, Wiedźmin 3 GOTY"];

}

remove(){
  this.toolbar2.pop();
}

getColor(): string{
  return this.hover ? 'red' : 'green';
}

ngOnInit(): void {
}

onMouseMove(event: MouseEvent) {
  this.hover = true;
}

onMouseExit(){
  this.hover = false;
}
// title = 'Witcher1';
}
