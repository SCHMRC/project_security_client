import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http : HttpClient) {

   }

   setAccess(){
    return this.http.get(environment.API)
   }
}
