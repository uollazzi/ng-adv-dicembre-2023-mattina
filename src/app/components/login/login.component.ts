import { Component } from '@angular/core';
import { ILoginDto, LoginDto } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  model = new LoginDto();
  // model: ILoginDto = { email: "", password: "" }

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.model)
      .pipe(

    )
      .subscribe(loggedUser => {
        this.authService.setLoggedUser(loggedUser);
        this.router.navigate([""]);
      });
  }
}
