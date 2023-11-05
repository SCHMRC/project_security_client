import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.development'
import { Observable } from 'rxjs';

export interface UsciteClasse{
  idClasseFK : string,
  timestamp : string
}

export interface Result {
  status: string,
  result: object[] | object
}


interface MyObject {
  [key: number]: string;
}
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  obj: MyObject = {
    0 : 'set',
    1 : 'set2',
    2: 'bagno',
    3: 'locali',
    4: 'uscite'
  }

  constructor(private http : HttpClient) {

  }

  getUsciteClasse(param: UsciteClasse) {
    return this.http.post(`${environment.APIHOME}${this.obj[4]}/classe`, {
      observe: 'body',
      responseType: 'json',
      params: {
        "idClasseFK": param.idClasseFK,
        "timestamp":param.timestamp
      }
    } )
  }

  getSummaryLocali(): Observable<Result> {
    return this.http.get<Result>(`${environment.APIHOME}${this.obj[3]}/summary`, {
      responseType: 'json'
    })
  }

   setAccess(num: number){
    return this.http.get(`${environment.APIHOME}${this.obj[num]}`)
   }
}
