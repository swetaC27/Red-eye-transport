import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SchedulesService {
  uri: any;

  constructor(private http: HttpClient) {
    this.uri = 'http://localhost:3000';
  }

  addScheduleDetails(scheduleId, rideDate, dayOfTheWeek, NUID, carId, slotTime, shiftTime, daysWorking, status) {
    const schedule = {
      scheduleId: scheduleId,
      rideDate: rideDate,
      dayOfTheWeek: dayOfTheWeek,
      NUID: NUID,
      carId: carId,
      slotTime: slotTime,
      shiftTime: shiftTime,
      daysWorking: daysWorking,
      status: status
    };
    return this.http.post(`${this.uri}/schedule/add`, schedule);
  }

  getScheduleList() {
    return this.http.get(`${this.uri}/schedule`);
  }


   /*deleteDriverDetails(id, daysWorked) {
    const driver = {
      NUID: id,
      daysWorking: daysWorked
    };

    return this.http.post(`${this.uri}/driverDetails/delete/${id}`, driver);
  }*/

    /*
    updateDriverDetails(id, daysWorked) {
      const driver = {
        NUID: id,
        daysWorking: daysWorked
      };

      return this.http.post(`${this.uri}/driverDetails/update/${id}`, driver);
    }*/

      /*getDriverDetailsById(nuid) {
    return this.http.get(`${this.uri}/schedule/${nuid}`);
  }*/

}
