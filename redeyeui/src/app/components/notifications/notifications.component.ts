import { Component, OnInit } from '@angular/core';
import { NotificationsService } from './../../services/notifications.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {
  notifications : any;
  constructor(private notiService:NotificationsService) { }

  ngOnInit() {
    this.notiService.getNotifications().subscribe((data: any) => {
      this.notifications = data;
      console.log("notifiactions------",this.notifications);
    });
  }

}
