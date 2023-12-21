import { Component, inject } from '@angular/core';
import { ILoginDto, LoginDto } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = new LoginDto();
  // model: ILoginDto = { email: "", password: "" }
  errorMessage = "";
  authService = inject(AuthService);
  router = inject(Router);

  login() {
    this.authService.login(this.model)
      .pipe(
        tap(dati => console.log("COMPONENTE", dati)),
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        }),
      )
      .subscribe(loggedUser => {
        console.log("SUBSCRIBE");

        if (loggedUser) {
          this.router.navigate([""]);
        }
      });
  }
}
