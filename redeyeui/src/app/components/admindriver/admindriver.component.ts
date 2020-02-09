import { DriverService } from '../../services/driver.service';
import {MatPaginator, MatTableDataSource} from '@angular/material';

import { Component, OnInit, NgModule, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Driver } from '../../model/driver.model';
import { NortheasternUniversityAD } from '../../model/passenger.model';
import { MatSnackBar, MatToolbarModule } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-driver',
  templateUrl: './admindriver.component.html',
  styleUrls: ['./admindriver.component.scss']
})
export class AdminDriverComponent implements OnInit {
  displayedColumns: string[] = ['NUID', 'firstName', 'lastName', 'status'];

   @ViewChild(MatPaginator) paginator: MatPaginator;

  id: any;
  updateDriverForm: FormGroup;
  dataSource: any;
  driver: any = {};

  // tslint:disable-next-line:max-line-length
  constructor(private driverService: DriverService, private formBuilder: FormBuilder, private activateRouterService: ActivatedRoute, private snackbar: MatSnackBar) {
    this.createForm();
  }

  createForm() {
    this.updateDriverForm = this.formBuilder.group({
      NUID: '',
      firstName: '',
      middleName: '',
      LastName: '',
      EmailId: '',
      PhoneNumber: '',
      status: ''
    });
  }
  ngOnInit() {
    this.driverService.getDriverDetailsList().subscribe((data: any) => {
      this.dataSource = data;
      console.log(data);
    });
    // console.log(this.driverService.getDriverDetailsById());
  }


  viewDriverDetails(id) {
    this.driverService.getDriverDetailsById(id).subscribe((data: any) => {
      this.driver = data;
     /* if(this.driver.status === 'active'){
        this.driver.status = 'inactive';
      }
      else{
        this.driver.status = 'active';
      }*/
    });
  }

updateDriverDetails(NUID, status) {
  this.driverService.updateDriverDetails(NUID, status).subscribe(() => {
    this.viewDriverDetails(NUID);
   });
   console.log(NUID);
    console.log(status);

}

}
