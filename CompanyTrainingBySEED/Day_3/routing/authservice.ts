import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
  login(user: string, password: string): boolean {
    if (user === 'ravi' && password === 'P@ssw0rd123') {
      localStorage.setItem('username', user);
      return true;
    }
    return false;
  }

  logout(): any { localStorage.removeItem('username'); }

  getUser(): any { return localStorage.getItem('username'); }

  isLoggedIn(): boolean { return this.getUser() !== null;}
}