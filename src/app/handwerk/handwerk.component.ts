import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  handwerk: string = ""
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get('http://localhost:1337/api/contents/3', { headers: { 'Authorization': 'Bearer cf9f689d34109fde2a4c244336293151b637597ebd62f3d75dc6359d10a9c2f31cb53ea8034cbfe6e5414564d6cc3d5b2ee9287f8468f53015a22745937a3a8e66f23194956d95853dd6acf986685779910812a24c03ac65e4f5fb7f1542eab80124a13adc90378f87282f68e8366d7c76ffdd2a9e0e8bcb6beb9a0e46578627' } })
      .subscribe((result: any) => this.handwerk = result.data.attributes.paragraphContent);

  }

}
