import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-time-open',
  templateUrl: './time-open.component.html',
  styleUrls: ['./time-open.component.scss']
})
export class TimeOpenComponent implements OnInit {
  clock: any = "../assets/images/clock.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
