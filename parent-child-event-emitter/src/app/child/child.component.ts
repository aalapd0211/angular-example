import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() counter:number;
  @Output() counterEmitter = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.counter++;
    this.counterEmitter.emit(this.counter);
  }

  decrease() {
    this.counter--;
    this.counterEmitter.emit(this.counter);
  }

}
