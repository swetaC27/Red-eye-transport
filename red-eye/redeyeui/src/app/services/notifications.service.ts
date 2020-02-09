import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  uri :any = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  getNotifications() {
      return this.http.get(`${this.uri}/emergency`);
  }
}
