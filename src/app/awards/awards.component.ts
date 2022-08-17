import { HttpClient } from '@angular/common/http';
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
  awardp1: string = ""
  awardp2: string = ""
  awardp3: string = ""
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:1337/api/contents/5', { headers: { 'Authorization': 'Bearer cf9f689d34109fde2a4c244336293151b637597ebd62f3d75dc6359d10a9c2f31cb53ea8034cbfe6e5414564d6cc3d5b2ee9287f8468f53015a22745937a3a8e66f23194956d95853dd6acf986685779910812a24c03ac65e4f5fb7f1542eab80124a13adc90378f87282f68e8366d7c76ffdd2a9e0e8bcb6beb9a0e46578627' } })
      .subscribe((result: any) => this.awardp1 = result.data.attributes.paragraphContent);
    this.http.get('http://localhost:1337/api/contents/6', { headers: { 'Authorization': 'Bearer cf9f689d34109fde2a4c244336293151b637597ebd62f3d75dc6359d10a9c2f31cb53ea8034cbfe6e5414564d6cc3d5b2ee9287f8468f53015a22745937a3a8e66f23194956d95853dd6acf986685779910812a24c03ac65e4f5fb7f1542eab80124a13adc90378f87282f68e8366d7c76ffdd2a9e0e8bcb6beb9a0e46578627' } })
      .subscribe((result: any) => this.awardp2 = result.data.attributes.paragraphContent);
    this.http.get('http://localhost:1337/api/contents/7', { headers: { 'Authorization': 'Bearer cf9f689d34109fde2a4c244336293151b637597ebd62f3d75dc6359d10a9c2f31cb53ea8034cbfe6e5414564d6cc3d5b2ee9287f8468f53015a22745937a3a8e66f23194956d95853dd6acf986685779910812a24c03ac65e4f5fb7f1542eab80124a13adc90378f87282f68e8366d7c76ffdd2a9e0e8bcb6beb9a0e46578627' } })
      .subscribe((result: any) => this.awardp3 = result.data.attributes.paragraphContent);
  }

}
