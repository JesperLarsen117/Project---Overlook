import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { HttpService } from 'src/app/services/http.service';
import { LoginCheckService } from 'src/app/services/login-check.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpService, public checkLogin: LoginCheckService, public fb: FormBuilder) { }
  loginForm = this.fb.group({
    username: ["", Validators.required],
    password: ["", [Validators.required, Validators.minLength(4)]],
  });
  ngOnInit(): void {
  }
  get f() { return this.loginForm.controls; }

  onSubmit() {
    const formData: any = new FormData();
    formData.append("username", this.loginForm.get("username").value);
    formData.append("password", this.loginForm.get("password").value);
    if (
      !this.loginForm.get("username").invalid &&
      !this.loginForm.get("password").invalid
    ) {
      this.http.getLogin(formData).subscribe(
        (res: any) => {
          if (res.access_token) {
            console.log("Det virker sky");

            this.setCookie("token", res.access_token, 7);
            this.setCookie("user_id", res.user_id, 7);
            this.setCookie("name", this.loginForm.get("username").value, 7);
            window.location.href = "/";
          }
        },
        (Error) => {
          console.log("Brugernavn eller kodeord er forkert");
        }
      );
    }
  }
  setCookie(cnamne, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString;
    document.cookie = `${cnamne} = ${cvalue}; ${expires};path=/`;
  }
}
