import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dry-aged',
  templateUrl: './dry-aged.component.html',
  styleUrls: ['./dry-aged.component.scss']
})
export class DryAgedComponent implements OnInit {
  meso1: any = "../assets/images/287e4a29fb95622355c7023ec0f765ff@2x 1.svg";
  meso2: any = "../assets/images/93567ed87a1475783cc3a90355825a87@2x 1.png";
  meso3: any = "../assets/images/d368bea5bcb8ed88cfcf994b7a518068@2x 1.png";
  meso4: any = "../assets/images/1c78d243bd195e6ff002f8fdbc24e5d0@2x 1.png";

  constructor() { }

  ngOnInit(): void {
  }

}
