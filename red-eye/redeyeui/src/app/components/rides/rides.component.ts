import { PassengerService } from './../../services/common.service';

import { Component, OnInit, NgModule } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rides',
  templateUrl: './rides.component.html',
  styleUrls: ['./rides.component.scss']
})
export class RidesComponent implements OnInit {
  selectedTime: any;
  filteredList = [];
  selectedSearch: any;
  ridesData:any;
  allridesData = [];
  udataRes:any;
  NUID : any ;
  bookingId:any;
  nuActive: any = {};
  viewForm: boolean=true;
  id: any;
  source:'Snell Library';
  destination:any;
  role:any;
  bookDate :any;
  displayedColumns = ['NUID','source', 'destination','pax','slots','status'];

  search = ['Past',
    'Upcoming',
    'All'
  ];

  constructor(private passengerService: PassengerService, private routerService: Router,  private activateRouterService: ActivatedRoute) { }
  ngOnInit() {
    this.passengerService.currentuData.subscribe(data => this.udataRes = data );
    this.NUID = this.udataRes.nuid;

    console.log('11----------',this.udataRes);
    if(this.NUID == null || (typeof(this.NUID) == undefined) ){
      this.udataRes = JSON.parse(localStorage.getItem("userdata"));
      console.log("this.udataRes",this.udataRes);
        this.NUID = this.udataRes.nuid;
        console.log(this.udataRes);
        this.rideHistory(this.NUID);
      }
  }


  rideHistory(NUID){
    this.passengerService.getHistory(this.NUID).subscribe((data: any) => {
      //console.log(data);
      this.ridesData = data;
      this.allridesData =data;
    });
  }




  filterSearch(type) {
    this.filteredList = [];
    this.selectedSearch = type;
    //console.log(this.selectedTime);
   // console.log(this.selectedSearch);



    if (this.selectedTime !== undefined && this.selectedSearch !== undefined) {
      this.allridesData.forEach(ride => {
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
      this.allridesData.forEach(ride => {
        console.log(ride.date);
        console.log(new Date(ride.date).getTime() < new Date().getTime());
        console.log(new Date(ride.date).getTime() >= new Date().getTime());

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
    this.ridesData = this.filteredList;
  }

}




