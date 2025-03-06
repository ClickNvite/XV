import { Component, OnInit , ElementRef, ViewChild} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent { 
  _second = 1000;
  _minute = this._second * 60;
  _hour = this._minute * 60;
  _day = this._hour * 24;
  end: any;
  now: any;
  day: any;
  hours: any;
  minutes: any;
  seconds: any;
  source = timer(0, 1000);
  clock: any;

  constructor(){}

  ngOnInit() {
    this.clock = this.source.subscribe(t => {
      this.now = new Date();
      this.end = new Date(2025, 9, 26, 0, 0, 0); // Mes 7 representa agosto (0 es enero, 11 es diciembre)
      this.showDate();
    });
  }

  showDate() {
    let distance = this.end - this.now;
    this.day = Math.floor(distance / this._day);
    this.hours = Math.floor((distance % this._day) / this._hour);
    this.minutes = Math.floor((distance % this._hour) / this._minute);
    this.seconds = Math.floor((distance % this._minute) / this._second);
  }
}
