import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handwerk',
  templateUrl: './handwerk.component.html',
  styleUrls: ['./handwerk.component.scss']
})
export class HandwerkComponent implements OnInit {
  linija: any = "../assets/images/Vector.png"
  logo: any = "../assets/images/Vector (1).png"

  img1: any = "../assets/images/Group 661@2x-1.png"
  img2: any = "../assets/images/Group 660@2x-1.png"
  img3: any = "../assets/images/Group 659@2x-1.png"
  img4: any = "../assets/images/Group 658@2x-1.png"

  constructor() { }

  ngOnInit(): void {
  }

}
