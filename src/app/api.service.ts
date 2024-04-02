import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private getUrl = 'http://localhost:4300';
  constructor(private http: HttpClient) {}

  forgot(data:any){
    return this.http.post('http://localhost:4300/forgot-password',data)
  };
  RESET(data:any){
    return this.http.post('http://localhost:4300/reset-password',data)
  };
  updatepassword(){
    
  }


}
