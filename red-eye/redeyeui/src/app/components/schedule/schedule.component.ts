import { SchedulesService } from './../../services/schedules.service';
import { Schedule } from './../../model/schedule.model';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';
import { Router, ActivatedRoute } from '@angular/router';
import { addDays, addHours, startOfDay } from 'date-fns';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import { MatSnackBar, MatToolbarModule } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  displayedColumns =  ['NUID', 'daysWorking', 'dayOfTheWeek', 'rideDate', 'slotTime', 'carId'];
  // tslint:disable-next-line:max-line-length
  constructor(private schedulersService: SchedulesService, private formBuilder: FormBuilder, private activateRouterService: ActivatedRoute, private snackbar: MatSnackBar) {
   // this.createForm();
  }
  id: any;
  selectedDay: any;
  filteredList = [];
  selectedSearch: any;
  driverRides = [];
  allSchedules = [];
  updateScheduleGroup: FormGroup;
  schedule: any = {};
  dataService = [];
  returnData = [];

  viewDate: Date = new Date();

  days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ];


  ngOnInit() {
    this.schedulersService.getScheduleList().subscribe((data: any) => {
      this.dataService = data;
      console.log('------DATA-------', data);
     });
   }


}
