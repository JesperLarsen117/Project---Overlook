import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { HttpHeaders } from "@angular/common/http";

import { LoginCheckService } from 'src/app/services/login-check.service';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {

  constructor(public checkLogin: LoginCheckService, public fb: FormBuilder, private http: HttpService) { }
  resevationFrom = this.fb.group({
    destination: ["", Validators.required],
    roomType: ["", [Validators.required]],
    people: ["", [Validators.required]],
    priceClass: ["", [Validators.required]],
    checkin: ["", [Validators.required]],
    checkout: ["", [Validators.required]],
    name: ["", [Validators.required]],
    lastname: ["", [Validators.required]],
    phone: ["", [Validators.required]],
    comment: ["", [Validators.required]]
  });
  ngOnInit(): void {
  }
  onSubmit() {
    const formData: any = new FormData();
    formData.append("user_id", this.checkLogin.getCookie('user_id'));
    formData.append("hotel_id", this.resevationFrom.get("destination").value);
    formData.append("room_id", this.resevationFrom.get("roomType").value);
    formData.append("num_persons", this.resevationFrom.get("people").value);
    formData.append("is_flex", this.resevationFrom.get("priceClass").value);
    formData.append("checkin", '123123123');
    formData.append("checkout", '123123123');
    formData.append("firstname", this.resevationFrom.get("name").value);
    formData.append("lastname", this.resevationFrom.get("lastname").value);
    formData.append("email", 'jesper@overlook.dk');
    formData.append("phone", this.resevationFrom.get("phone").value);
    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.checkLogin.getCookie("token")}`
    );
    this.http.submitResevation(formData, { headers }).subscribe((res: any) => {
      console.log(res);
      if (res.status === true) {
        console.log(res.status);
        location.href = '/thankyou';
      }
    });
  }
  get f() { return this.resevationFrom.controls; }

}
