import { MatSnackBar } from '@angular/material';

import { DriverService } from './../../services/driver.service';
import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { PassengerService } from './../../services/common.service';
@Component({
  selector: 'app-driverrides',
  templateUrl: './driverrides.component.html',
  styleUrls: ['./driverrides.component.scss']
})
export class DriverridesComponent implements OnInit {
  udataRes:any;
  id: any;
  selectedTime: any;
  filteredList = [];
  selectedSearch: any;
  driverRides = [];
  alldriverRides = [];
  noShow: boolean;
  times = ['All', '7:00PM - 7:30PM',
    '7:30PM - 8:00PM',
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
  search = ['Past',
    'Upcoming',
    'All'
  ];


  displayedColumns = ['NUID', 'firstName', 'lastName', 'source', 'destination', 'status', 'actions'];
  allowSave: boolean;
  // tslint:disable-next-line:max-line-length
  constructor(private _router: Router,private passengerService: PassengerService,private driverService: DriverService, private formBuilder: FormBuilder, private activateRouterService: ActivatedRoute, public snackbar: MatSnackBar) {

  }

  ngOnInit() {
    this.noShow = true;
    /*this.activateRouterService.params.subscribe(params => {
      this.id = params.id;
      this.getRides(this.id);
    });*/

    this.udataRes = JSON.parse(localStorage.getItem("userdata"));
    console.log("this.udataRes",this.udataRes);
    if (this.udataRes) {
      this.id =  this.udataRes.nuid;
      this.getRides(this.id);
    } else {
      this._router.navigate(["/login"]);
    }

  }

  getRides(id) {
    this.driverService.getRideDetails(id).subscribe((data: any) => {
      this.driverRides = data;
      this.alldriverRides = data;
      console.log(this.driverRides);
    });
  }

  updateStatus(id, currentStatus, status) {
    this.allowSave = true;
    // if (status === 'NoShow' && (currentStatus === 'Completed' || currentStatus === 'Cancelled' || currentStatus === 'OnGoing')) {
    //   this.allowSave = false;
    // } else if (status === 'Completed' && (currentStatus === 'NoShow' || currentStatus === 'Cancelled')) {
    //   this.allowSave = false;
    // } else if (status === 'OnGoing' && (currentStatus === 'NoShow' || currentStatus === 'Cancelled')) {
    //   this.allowSave = false;
    // }
    // if (status === 'NoShow') {
    //   this.noShow = false;
    // }

    if (this.allowSave) {
      this.driverService.updateRiderStatus(id, status).subscribe((data: any) => {
        console.log(data);
        this.getRides(data.driverID);
      });
      console.log(id);
      console.log(currentStatus);
      console.log(status);
    } else {
      console.log('Error');
    }


    //  console.log(id);
    //  console.log(currentStatus);
    //  console.log(status);
  }

  filterSchedules(slot) {
    this.filteredList = [];
    let dateToCompare: any;

    this.selectedTime = slot;


    if (this.selectedTime !== undefined && this.selectedSearch !== undefined) {
      this.alldriverRides.forEach(ride => {
        if (this.selectedSearch === 'All') {
          if (ride.slot === slot || slot === 'All') {
            this.filteredList.push(ride);
          }
        } else if (this.selectedSearch === 'Past') {
          if ((ride.slot === slot || slot === 'All') && new Date(ride.date).getDate() < new Date().getDate()) {
            this.filteredList.push(ride);
          }
        } else if (this.selectedSearch === 'Upcoming') {
          if ((ride.slot === slot || slot === 'All') && new Date(ride.date).getDate() >= new Date().getDate()) {
            this.filteredList.push(ride);
          }
        }

      });
    } else {
      this.alldriverRides.forEach(ride => {
        if (ride.slot === slot || slot === 'All') {
          this.filteredList.push(ride);
        }
      });
    }

    console.log(this.selectedTime);
    console.log(this.selectedSearch);
    console.log(new Date());


    this.driverRides = this.filteredList;
    // console.log(filteredList);
    //  console.log(ride.date);
    //  console.log(new Date(ride.date).getTime() < new Date().getTime());
    //  console.log(new Date(ride.date).getTime() > new Date().getTime());
  }

  filterSearch(type) {
    this.filteredList = [];
    this.selectedSearch = type;
    console.log(this.selectedTime);
    console.log(this.selectedSearch);



    if (this.selectedTime !== undefined && this.selectedSearch !== undefined) {
      this.alldriverRides.forEach(ride => {
        if (this.selectedSearch === 'All') {
          if ((ride.slot === this.selectedTime || this.selectedTime === 'All') || this.selectedTime === 'All') {
            this.filteredList.push(ride);
          }
        } else if (this.selectedSearch === 'Past') {
          if ((ride.slot === this.selectedTime || this.selectedTime === 'All') && new Date(ride.date).getDate() < new Date().getDate()) {
            this.filteredList.push(ride);
          }
        } else if (this.selectedSearch === 'Upcoming') {
          if ((ride.slot === this.selectedTime || this.selectedTime === 'All') && new Date(ride.date).getDate() >= new Date().getDate()) {
            this.filteredList.push(ride);
          }
        }

      });
    } else {
      this.alldriverRides.forEach(ride => {
        console.log(ride.date);
        // console.log(new Date(ride.date).getTime() < new Date().getTime());
        // console.log(new Date(ride.date).getTime() >= new Date().getTime());

        if (this.selectedSearch === 'All') {
          this.filteredList.push(ride);
        } else if (this.selectedSearch === 'Past') {
          if (new Date(ride.date).getDate() < new Date().getDate()) {
            this.filteredList.push(ride);
          }
        } else if (this.selectedSearch === 'Upcoming') {
          if (new Date(ride.date).getDate() >= new Date().getDate()) {
            this.filteredList.push(ride);
          }

        }
      });
    }
    this.driverRides = this.filteredList;
  }


}
