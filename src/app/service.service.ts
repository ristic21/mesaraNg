import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })

export class ServiceService {
  brathcontent: string = ''

  constructor(private http: HttpClient) {



  }


}


//5a2d5e9b9dfbb981e6880df3d01013cb5804d89891e6005624ebe4318f53bf2ecc480fe1422dada25b7d19f1b37a87eeaede6969c6ecf34694ff9d03f3f2d6fdb3938a34568079534660c7e2bea3d10a6c61bf29ed2bed9509aa145dd0c1a32e82c44cdbb219fa598c5f94345b9675e39f939764441aed04cae7561a7ee3027e