import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {
  private uDataService = new BehaviorSubject<any>('');
  currentuData = this.uDataService.asObservable();
  uri: any;
  userData:any;
  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:3000';
  }

  chanageUdata(message:any){
      this.uDataService.next(message);
  }

  getpassengerdetail(id) {
    return this.http.get(`${this.uri}/bookRide/${id}`);
  }


  bookreservation(NUID,source, destination,number,time_type,zone_type,bookDate)
 {
   let obj = {
     NUID: NUID,
     source: source,
     destination: destination,
     numberOfPerson: number,
     slot:time_type,
     zone:zone_type,
     date: bookDate
   }
   return this.http.post(`${this.uri}/bookRide/reserve`, obj);
 }


  cancelreservation(id)

{
  {
    let obj = {
      NUID : id
    }
    return this.http.post(`${this.uri}/bookRide/cancel/${id}`,obj);
  }

}

getHistory(NUID)
{
  return this.http.get(`${this.uri}/bookRide/history/${NUID}`);

}

  setSharedData(data) {
    this.userData = data;
  }

  getSharedData() {
    return this.userData;
  }

  getEmergencyContacts() {
    return this.http.get(`${this.uri}/emergency`);
  }
}
