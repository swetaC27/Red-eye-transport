import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DriverService {
  uri: any;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:3000';
  }

  getDriverDetailsById(id) {
    return this.http.get(`${this.uri}/driverDetails/${id}`);
  }

  addDriverDetails(NUID, shiftTime, daysWorked, status, userType) {
    const driver = {
      NUID: NUID,
      shiftTime: shiftTime,
      daysWorking: daysWorked,
      status: status,
      userType: userType
    };
    return this.http.post(`${this.uri}/driverDetails/add`, driver);
  }

  updateDriverDetails(id, daysWorked) {
    const driver = {
      NUID: id,
      daysWorking: daysWorked
    };

    return this.http.post(`${this.uri}/driverDetails/update/${id}`, driver);
  }

  getDriverDetailsList() {
    return this.http.get(`${this.uri}/driverDetails`);
  }

  /*deleteDriverDetails(id, daysWorked) {
    const driver = {
      NUID: id,
      daysWorking: daysWorked
    };

    return this.http.post(`${this.uri}/driverDetails/delete/${id}`, driver);
  }*/

  getRideDetails(id) {
    return this.http.get(`${this.uri}/driverDetails/rides/${id}`);
  }

  updateRiderStatus(id, status) {
    const rideStatus = {
      NUID: id,
      status: status
    };
    console.log(id);
    return this.http.post(`${this.uri}/driverDetails/updateRideStatus/${id}`, rideStatus);
  }

}
