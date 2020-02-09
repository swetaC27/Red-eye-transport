import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  host:string = "http://localhost:3000";
  constructor(private _http: HttpClient) { }

  submitRegister(body:any){
    return this._http.post(this.host + '/users/register', body,{
      observe:'body'
    });
  }

  login(body:any){
    return this._http.post(this.host + '/users/login', body,{
      observe:'body'
    });
  }

  getUserName() {
    return this._http.get(this.host + '/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

}
