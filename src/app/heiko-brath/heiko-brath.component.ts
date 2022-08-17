import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';



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
  brathcontent: string = ""

  constructor(private http: HttpClient) {

  }

  ngOnInit(): void {

    this.http.get('http://localhost:1337/api/contents/1', { headers: { 'Authorization': 'Bearer cf9f689d34109fde2a4c244336293151b637597ebd62f3d75dc6359d10a9c2f31cb53ea8034cbfe6e5414564d6cc3d5b2ee9287f8468f53015a22745937a3a8e66f23194956d95853dd6acf986685779910812a24c03ac65e4f5fb7f1542eab80124a13adc90378f87282f68e8366d7c76ffdd2a9e0e8bcb6beb9a0e46578627' } })
      .subscribe((result: any) => this.brathcontent = result.data.attributes.paragraphContent);

  }


}


