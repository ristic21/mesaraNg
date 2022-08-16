import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heiko-brath',
  templateUrl: './heiko-brath.component.html',
  styleUrls: ['./heiko-brath.component.scss']
})
export class HeikoBrathComponent implements OnInit {
  image1: any = "../assets/images/image 14-1.jpg"
  image2: any = "../assets/images/image 14.jpg"
  lgImage: any = "../assets/images/287e4a29fb95622355c7023ec0f765ff@2x 1.svg"
  smImage: any = "../assets/images/287e4a29fb95622355c7023ec0f765ff@2x 2.svg"
  brathcontent: string
  constructor() {
    this.brathcontent = "Deutsches Ipsum Dolor deserunt dissentias Grimms Märchen et. Tollit argumentum ius an. Pfannkuchen lobortis elaboraret per ne, nam Aperol Spritz probatus pertinax."
  }

  ngOnInit(): void {
  }

}



