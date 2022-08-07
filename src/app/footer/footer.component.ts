import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  info: any = "../assets/images/info.png"
  logo: any = "../assets/images/logo.png"
  social: any = "../assets/images/social.png"
  logoPhone: any = "../assets/images/Group.png"
  constructor() { }

  ngOnInit(): void {
  }

}
