import { Component } from '@angular/core';
import { AuthService } from '../../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe((res) => {
      this.authService.setSession(res.data);
      this.router.navigateByUrl('');
    });
  }
}
