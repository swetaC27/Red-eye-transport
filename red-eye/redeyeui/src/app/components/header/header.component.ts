import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { PassengerService } from "./../../services/common.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  userName: string = "";
  udataRes: any;

  constructor(
    private _router: Router,
    private commonService: PassengerService
  ) {}

  ngOnInit() {
    this.commonService.currentuData.subscribe(data => (this.udataRes = data));
    if (this.udataRes == "") {
      this.udataRes = JSON.parse(localStorage.getItem("userdata"));
      if (this.udataRes) {
        this.userName = this.udataRes.firstName;
      } else {
        this._router.navigate(["/login"]);
      }
    }
  }

  logout() {
    this.commonService.chanageUdata("");
    localStorage.removeItem("userdata");
    this._router.navigate(["/login"]);
  }
}
