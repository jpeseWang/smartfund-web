import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService) {}

  menu_icon_variable: boolean = false;
  menuVariable: boolean = false;

  isRouteActive(route: string): boolean {
    return this.router.isActive(route, true);
  }

  toggleMenuStatus() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  getCurrentUser() {
    return this.authService.getCurrentUser();
  }

  signout() {
    return this.authService.logout();
  }
}
