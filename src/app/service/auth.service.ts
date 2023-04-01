import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = 'http://localhost:3000/user';

  constructor(private http: HttpClient) {}

  
  getAll(){
    return this.http.get(this.apiUrl)
  }

  getUserCode(inputData: any){
    return this.http.get(this.apiUrl + '/' + inputData)
  }

  register(userdata: any){
    return this.http.post(this.apiUrl, userdata)
  }

}

