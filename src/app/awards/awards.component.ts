import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {
  logo: any = "../assets/images/genussnetz logo 1.png"
  logo1: any = "../assets/images/grillkurs_icon-1.svg"
  linija: any = "../assets/images/Vector.png"
  logo2: any = "../assets/images/Vector (1).png"
  award1: any = "../assets/images/nagrada1.svg"
  award2: any = "../assets/images/nagrada2.svg"
  award3: any = "../assets/images/nagrada3.svg"
  award4: any = "../assets/images/nagrada4.svg"
  zvezdica: any = "../assets/images/zvezdice-1.svg"
  navodnici: any = "../assets/images/Path 12404.png"
  left: any = "../assets/images/left.png"
  right: any = "../assets/images/right.png"
  constructor() { }

  ngOnInit(): void {
  }

}
