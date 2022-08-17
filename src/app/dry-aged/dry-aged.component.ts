import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  dryAged: string = ""
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:1337/api/contents/2', { headers: { 'Authorization': 'Bearer cf9f689d34109fde2a4c244336293151b637597ebd62f3d75dc6359d10a9c2f31cb53ea8034cbfe6e5414564d6cc3d5b2ee9287f8468f53015a22745937a3a8e66f23194956d95853dd6acf986685779910812a24c03ac65e4f5fb7f1542eab80124a13adc90378f87282f68e8366d7c76ffdd2a9e0e8bcb6beb9a0e46578627' } })
      .subscribe((result: any) => this.dryAged = result.data.attributes.paragraphContent);
  }

}
