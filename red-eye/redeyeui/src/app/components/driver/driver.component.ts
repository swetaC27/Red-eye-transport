import { MatSnackBar } from '@angular/material';

import { DriverService } from './../../services/driver.service';
import { Component, OnInit, NgModule, Inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MAT_SNACK_BAR_DATA} from '@angular/material';


@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {

  // driver: any = {};
  // id: any;
  // updateDriverForm: FormGroup;
  // name: String;
  // daysWorked: any;
  // showAdd: boolean;
  // showUpdate: boolean;
  // allowSave: boolean;

  constructor() {}

  // tslint:disable-next-line:max-line-length
  // constructor(private driverService: DriverService, private formBuilder: FormBuilder, private activateRouterService: ActivatedRoute, public snackbar: MatSnackBar) {
  //   this.createForm();
  //   this.daysWorked = [
  //     {'day': 'Monday', 'checked': false},
  //     {'day': 'Tuesday', 'checked': false},
  //     {'day': 'Wednesday', 'checked': false},
  //     {'day': 'Thursday', 'checked': false},
  //     {'day': 'Friday', 'checked': false},
  //     {'day': 'Saturday', 'checked': false},
  //     {'day': 'Sunday', 'checked': false}
  //   ];

  // }

  // createForm() {
  //   this.updateDriverForm = this.formBuilder.group({
  //     NUID: '',
  //     firstName: '',
  //     LastName: '',
  //     userType: '',
  //     shiftTime: '',
  //     dayworking: [],
  //     status: ''
  //   });
  // }
  ngOnInit() {

    // this.activateRouterService.params.subscribe(params => {
    //   this.id = params.id;
    //   this.viewDriverDetails(this.id);
    // });
  }

//   viewDriverDetails(id) {
//     this.driverService.getDriverDetailsById(id).subscribe((data: any) => {
//       this.driver = data;
//       if (typeof this.driver.shiftTime === 'undefined') {
//         this.driver.shiftTime = '7AM-6PM';
//         this.showAdd = true;
//         this.showUpdate = false;
//       } else {
//         this.showAdd = false;
//         this.showUpdate = true;
//       }
//       if (typeof this.driver.daysWorking === 'undefined') {
//         this.driver.daysWorking = this.daysWorked;
//         this.showAdd = true;
//         this.showUpdate = false;
//       } else {
//         this.showAdd = false;
//         this.showUpdate = true;
//       }
//     });
//   }
//   openSnack() {
//     this.snackbar.openFromComponent(SnackComponent, {
//       duration: 3000,
//     });
//   }
// updateDriverDetails(NUID, daysWorked) {
//   daysWorked.forEach(element => {
//     if (element.checked === true) {
//       this.allowSave = true;
//     }
//   });

//   if (this.allowSave) {
//     this.driverService.updateDriverDetails(NUID, daysWorked).subscribe(() => {
//       this.viewDriverDetails(NUID);
//       this.snackbar.openFromComponent(SnackComponent, {
//         data: 'Driver details updated successfully!',
//         duration: 1500,
//       });
//      });
//   } else {
//     this.snackbar.openFromComponent(SnackComponent, {
//       data: 'Please select at least one field in days working field!',
//       duration: 1500,
//     });
//   }



// }
// addDriverDetails(NUID, shiftTime, daysWorked) {
//   daysWorked.forEach(element => {
//     if (element.checked === true) {
//       this.allowSave = true;
//     }
//   });

//   if (this.allowSave) {
//     this.driverService.addDriverDetails(NUID, shiftTime, daysWorked, 'active', 'Driver').subscribe(() => {
//       this.viewDriverDetails(NUID);
//       this.snackbar.openFromComponent(SnackComponent, {
//       data: 'Driver details added successfully!',
//       duration: 1500,
//     });
//   });
//   } else {
//     this.snackbar.openFromComponent(SnackComponent, {
//       data: 'Please select at least one field in days working field!',
//       duration: 1500,
//     });
//   }
// }
// }

// @Component({
//   selector: 'snack-bar',
//   template: `<span class="message">{{data}}
//   </span>`,
//   styles: [`
//     .message {
//       color: green;
//     }
//   `],
// })
// export class SnackComponent {
//   constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) {}
// }
}
