import { PassengerService } from './../../services/common.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NortheasternUniversityAD } from './../../model/passenger.model';
import { DatePipe } from '@angular/common';
import { MatGridListModule } from '@angular/material';

providers: [DatePipe]


@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.scss'],


})



export class PassengerComponent implements OnInit {
  showForm : boolean = true;
  bookingId:any;
  udata: any;
  nuid: any;
  nopeople: any;
  timetype: any;
  nuActive: any = {};
  viewForm: boolean=true;
  id: any;
  source:'Snell';
  destination:any;
  role:any;
  bookDate = new Date();
 // nopeople=['1','2','3','4'];
  zones=['west zone','east zone']
  times=['7:00 PM - 7:30 PM',
  '7:30 PM - 8:00PM',
  '8:00PM - 8:30PM',
  '8:30PM -  9:00PM',
  '9:00PM - 9:30PM',
  '9:30PM - 10:00PM',
  '10:00PM - 10:30PM',
  '10:30PM - 11:00PM',
  '11:00PM - 11:30PM',
  '11:30PM - 12:00AM',
  '12:00AM - 12:30AM',
  '12:30AM - 1:00AM',
  '1:00AM - 1:30AM',
  '1:30AM - 2:00AM',
  '2:00AM - 2:30AM',
  '2:30AM - 3:00AM',
  '3:00AM - 3:30AM',
  '3:30AM - 4:00AM',
  '4:00AM - 4:30AM',
  '4:30AM - 5:00AM',
  '5:00AM - 5:30AM',
  '5:30AM - 6:00AM'];



  constructor(private passengerService: PassengerService, private routerService: Router,  private activateRouterService: ActivatedRoute) { }

  ngOnInit() {
    //this.id = '5bff5803b7b0aaf1a0be5ad3';
    this.udata = localStorage.getItem('userdata');
    console.log('ascascacascac----', this.udata);
    this.udata = JSON.parse(this.udata);
    this.nuid = this.udata.nuid;
    this.activateRouterService.params.subscribe(params => {
      this.id = params.id;
    this.passengerService.getpassengerdetail(this.id).subscribe((data: any) => {
      this.nuActive = data;
      this.nuActive.source = 'Snell Library';
      console.log(this.nuActive);

    });

    });
  }


bookRider(NUID,source,destination,number,time_type,zone_type,bookDate)
{
    console.log(source);
    console.log(destination);
    console.log(this.timetype);
    console.log(this.nopeople);

this.passengerService.bookreservation(NUID,source, destination,number,time_type,zone_type,bookDate).subscribe((data: any) => {
  console.log(data);
  this.bookingId = data._id;
});



}

updateCancelled(id)
{
  console.log(this.bookingId);
  this.passengerService.cancelreservation(this.bookingId).subscribe((data: any) => {
    this.showForm = false;
    console.log(data);
  });

}

}








