import { Component } from '@angular/core';
import { LoggedUser, RegisterDto } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { catchError, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AUTO_STYLE } from '@angular/animations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  model = new RegisterDto();
  errorMessage = "";

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  register() {
    this.authService.register(this.model)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          this.errorMessage = err.error;
          return of(undefined);
        })
      )
      .subscribe(user => {
        if (user) {
          this.snackBar.open("Registrazione avvenuta con successo!", "OK")
          this.router.navigate(["/login"]);
        }
      });
  }
}
