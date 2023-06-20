import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Mi contador inicia en {{counter}}</h3>
<button (click)="increaseBy(1)">+ 1</button>
<button (click)="ResetBy(10)">RESET</button>
<button (click)="increaseBy(-1)">-1</button>
  `
})

export class CounterComponent {
  public counter:number=10;

  increaseBy(value : number):void{
    this.counter+=value;
  }
  ResetBy(value:number):void{
    this.counter=value;
  }
}
