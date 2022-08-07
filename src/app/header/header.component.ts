import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  logo: any = "../assets/images/logo.png";
  pdf: any = "../assets/images/pdfLogo.png";
  linija1: any = "../assets/images/Rectangle 215.png"
  linija2: any = "../assets/images/Rectangle 216.png"
  linija3: any = "../assets/images/Rectangle 217.png"
  constructor() {

  }

  ngOnInit(): void {
  }

}
