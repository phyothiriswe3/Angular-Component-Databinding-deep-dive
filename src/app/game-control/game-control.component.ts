import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  time:any;
  n: number = 0;
  @Output() evenEvent = new EventEmitter<{ data: number }>();
  @Output() oddEvent = new EventEmitter<{ data: number }>();
  start() {
     this.time = setInterval(() => {
      this.n += 1;
      if (this.n % 2 == 0) {
        this.evenEvent.emit({
          data: this.n
          
        })
      } else {
        this.oddEvent.emit({
          data: this.n
        })
      }

    }
      , 1000)
  }
  stop() {
    clearInterval(this.time)
    console.log(stop)
  }
}
