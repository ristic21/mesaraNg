import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spices',
  templateUrl: './spices.component.html',
  styleUrls: ['./spices.component.scss']
})
export class SpicesComponent implements OnInit {
  spices: any = "../assets/images/4541cc99083f618a22b772228f8a9698@2x 1-1.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
