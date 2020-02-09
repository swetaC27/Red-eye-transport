import { Component, OnInit } from '@angular/core';
import { PassengerService } from './../../services/common.service';

@Component({
  selector: 'app-emergency',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.scss']
})
export class EmergencyComponent implements OnInit {
  emergencyContacts:any;

  constructor(private commonService:PassengerService) {

    this.commonService.getEmergencyContacts().subscribe((data: any) => {
        this.emergencyContacts = data;
        console.log(this.emergencyContacts);
    });
  }

  ngOnInit() {
  }

}
