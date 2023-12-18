import { Component } from '@angular/core';
import { ILoginDto, LoginDto } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = new LoginDto();
  // model: ILoginDto = { email: "", password: "" }
  errorMessage = "";

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe(loggedUser => {
        console.log("SUBSCRIBE");

        if (loggedUser) {
          this.authService.setLoggedUser(loggedUser);
          this.router.navigate([""]);
        }
      });
  }
}
