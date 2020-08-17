import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { HttpHeaders } from "@angular/common/http";

import { LoginCheckService } from "src/app/services/login-check.service";
import { HttpService } from "src/app/services/http.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-reservation",
  templateUrl: "./reservation.component.html",
  styleUrls: ["./reservation.component.scss"],
})
export class ReservationComponent implements OnInit {
  constructor(
    public checkLogin: LoginCheckService,
    public fb: FormBuilder,
    private http: HttpService,
    private route: ActivatedRoute
  ) {}
  hotelId = this.route.snapshot.params.hotel
    ? this.route.snapshot.params.hotel
    : null;
  roomId = this.route.snapshot.params.room
    ? this.route.snapshot.params.room
    : null;
  resevationFrom = this.fb.group({
    destination: [this.hotelId, Validators.required],
    roomType: [this.roomId, Validators.required],
    people: [null, Validators.required],
    priceClass: [Boolean, Validators.required],
    checkIn: [Date, Validators.required],
    checkOut: [Date, Validators.required],
    name: ["", Validators.required],
    lastname: ["", Validators.required],
    phone: ["", Validators.required],
    check: ["", Validators.required],
  });
  ngOnInit(): void {
    console.log(this.route.snapshot.params);
    setTimeout(() => {
      const radios = document.getElementsByName('priceClass') as NodeListOf<HTMLInputElement>;
      radios[0].checked = true;
      if (this.route.snapshot.params.flex === "no") {
        radios[0].checked = true;
      } else if (this.route.snapshot.params.flex === "yes") {
        radios[1].checked = true;
      }
    }, 200);
  }
  onSubmit() {
    const formData: any = new FormData();

    let checkin = Math.round(new Date(this.resevationFrom.get('checkIn').value).getTime()/1000),
    checkout = Math.round(new Date(this.resevationFrom.get('checkOut').value).getTime()/1000);

    formData.append("user_id", this.checkLogin.getCookie("user_id"));
    formData.append("hotel_id", this.resevationFrom.get("destination").value);
    formData.append("room_id", this.resevationFrom.get("roomType").value);
    formData.append("num_persons", this.resevationFrom.get("people").value);
    formData.append("is_flex", this.resevationFrom.get("priceClass").value);
    formData.append("checkin", checkin);
    formData.append("checkout", checkout);
    formData.append("firstname", this.resevationFrom.get("name").value);
    formData.append("lastname", this.resevationFrom.get("lastname").value);
    formData.append("email", "jesper@overlook.dk");
    formData.append("phone", this.resevationFrom.get("phone").value);

    const headers = new HttpHeaders().set(
      "Authorization",
      `Bearer ${this.checkLogin.getCookie("token")}`
    );
    this.http.submitResevation(formData, { headers }).subscribe((res: any) => {
      console.log(res);
      if (this.resevationFrom.valid) {
        if (res.status === true) {
          console.log(res.status);
          location.href = "/thankyou";
        }
      }
    });

  }
  get f() {
    return this.resevationFrom.controls;
  }
}
