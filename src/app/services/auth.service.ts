import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly apiConfigService: ApiConfigService) {}

  login(username: string, password: string) {
    return this.apiConfigService.post<any>('auth/login', {
      username,
      password,
    });
  }

  signup(username: string, password: string) {
    return this.apiConfigService.post<any>('auth/register', {
      username,
      password,
    });
  }

  setSession(data: any) {
    const expiresAt = moment().add(data.token.expiresIn, 'second');

    localStorage.setItem('access_token', data.token.accessToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));

    localStorage.setItem('current_user', JSON.stringify(data.user));
  }

  logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('expires_at');

    localStorage.removeItem('current_user');
  }

  isLoggedIn() {
    const expiration = this.getExpiration();
    if (!expiration) {
      return false;
    }
    return moment().isBefore(expiration);
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    if (!expiration) {
      return null;
    }
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }

  getAccessToken() {
    return localStorage.getItem('access_token');
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('current_user') as string);
  }
}
