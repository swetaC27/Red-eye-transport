import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BookedRideService {

  uri: any;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:3000';
  }

  getConfirmedRidedetail(id) {
    return this.http.get(`${this.uri}/bookRide/confirm`);
  }




  
}
