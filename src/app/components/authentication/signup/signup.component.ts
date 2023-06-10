import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}

  signup(username: string, password1: string, password2: string) {
    if (password1 !== password2) {
      alert('Password not match');
      return;
    }

    this.authService.signup(username, password1).subscribe((res) => {
      this.authService.setSession(res.data);
      this.router.navigateByUrl('');
    });
  }
}
