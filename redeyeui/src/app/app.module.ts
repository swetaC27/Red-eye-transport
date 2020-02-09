import { AdminDriverComponent } from './components/admindriver/admindriver.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LoginComponent, snackoneComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { PassengerComponent } from './components/passenger/passenger.component';
import { HttpClientModule } from '@angular/common/http';

import {NoopAnimationsModule} from '@angular/platform-browser/animations';
// tslint:disable-next-line:max-line-length
import { MatProgressSpinnerModule ,MatTabsModule, MatGridListModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';

import { DriverComponent } from './components/driver/driver.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DriverService } from './services/driver.service';

import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { ProfileComponent } from './components/profile/profile.component';
import { RidesComponent } from './components/rides/rides.component';
import { RideComponent } from './components/ride/ride.component';
import { LoginService } from './services/login.service';
import { ShiftsComponent } from './components/shifts/shifts.component';
import { EmergencyComponent } from './components/emergency/emergency.component';
import { NotificationsComponent } from './components/notifications/notifications.component';

import { ScheduleComponent } from './components/schedule/schedule.component';

import { DriverschedulesComponent, SnackComponent } from './components/driverschedules/driverschedules.component';
import { DriverridesComponent } from './components/driverrides/driverrides.component';
import { RidestabsComponent } from './components/ridestabs/ridestabs.component';
const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'rides', component: RidesComponent },
  { path: 'ride', component: RideComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'driverDetails/rides', component: DriverridesComponent },
  { path: 'driverDetails/:id', component: DriverschedulesComponent },
  { path: 'emergency', component: EmergencyComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'passengerdetails/:id', component: PassengerComponent },
  { path: 'drivers', component: AdminDriverComponent},
  // { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    LoginComponent,
    snackoneComponent,
    PassengerComponent,
    DriverComponent,
    AdminDriverComponent,
    SnackComponent,
    ProfileComponent,
    RidesComponent,
    RideComponent,
    ProfileComponent,
    ShiftsComponent,

    DriverschedulesComponent,

    EmergencyComponent,
    NotificationsComponent,
    SnackComponent,
    DriverridesComponent,
    RidestabsComponent,
    ScheduleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatProgressSpinnerModule ,
    MatTabsModule,
    MatGridListModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CommonModule,
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    FormsModule,
    NoopAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [DriverService, LoginService, SnackComponent, snackoneComponent
//    {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
  ],
  entryComponents: [
    SnackComponent,
    snackoneComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
