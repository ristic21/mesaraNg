import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fleischversand',
  templateUrl: './fleischversand.component.html',
  styleUrls: ['./fleischversand.component.scss']
})
export class FleischversandComponent implements OnInit {
  meze: any = "../assets/images/80457d7e9d392ee84954d90d13d15d69@2x 1-1.png"
  mezeSm: any = "../assets/images/80457d7e9d392ee84954d90d13d15d69@2x 1.png"
  constructor() { }

  ngOnInit(): void {
  }

}
