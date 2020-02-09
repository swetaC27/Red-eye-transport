import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { PassengerService } from './../../services/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  udataRes:any;
  loginForm: FormGroup;
  constructor(private loginService:LoginService, private _router: Router,
    private _activatedRoute: ActivatedRoute,public snackBar: MatSnackBar,private commonService:PassengerService) {
    this.loginForm = new FormGroup({
      emailID: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {
    this.commonService.currentuData.subscribe(data => this.udataRes = data );
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value)
        .subscribe(
          data => {
            console.log("data---------",data);
            localStorage.setItem('token', data.toString());
            this.loginService.getUserName()
            .subscribe(
            dataU => {
              this.commonService.chanageUdata(dataU);
              this.commonService.setSharedData(JSON.stringify(dataU));
              localStorage.setItem('userdata', JSON.stringify(dataU));
              console.log("dataU--------",dataU);
              if(dataU['role'] == 'Driver'){
                this._router.navigate(['/driverDetails/'+dataU['nuid']]);
              }else if(dataU['role'] == 'Student'){
                this._router.navigate(['/passengerdetails/'+dataU['objid']]);
              }else if(dataU['role'] == 'Admin'){
                this._router.navigate(['/schedule']);
              }
            });

          },
          error => {
            this.snackBar.openFromComponent(snackoneComponent, {
              duration: 1500,
            });
           }
        );
    }
  }

  /*movetoregister() {
    this._router.navigate(['../register'], { relativeTo: this._activatedRoute });
  }*/

  openSnackBar() {
    this.snackBar.openFromComponent(snackoneComponent, {
      duration: 1500,
    });
  }
}

@Component({
  selector: 'snack-bar',
  template: `<span class="example-pizza-party">
    Wrong credentials.
  </span>`,
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class snackoneComponent {}
