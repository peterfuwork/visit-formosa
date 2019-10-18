import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { catchError, mapTo, tap } from 'rxjs/operators';
import { config } from '../config';
import { Tokens } from '../models/tokens';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated$: boolean;
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USER = 'USER';
  constructor(
    private http: HttpClient
  ) {}

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${config.apiUrl}/wp-json/jwt-auth/v1/token`, user)
      .pipe(
        tap(tokens => {
          console.log(tokens);
          this.doLoginUser(tokens);
        }),
        mapTo(true),
        catchError(error => {
          alert(error.error);
          return of(false);
        }));
  }

  logout() {
    this.removeTokens();
    this.removeUser();
    this.isAuthenticated$ = false;
    return this.isLoggedIn();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  getUser() {
    return localStorage.getItem(this.USER);
  }

  private doLoginUser(tokens: Tokens) {
    this.storeTokens(tokens);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
    localStorage.setItem(this.USER, tokens.user_display_name);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }

  private removeUser() {
    localStorage.removeItem(this.USER);
  }
}
