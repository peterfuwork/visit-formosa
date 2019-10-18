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
  private loggedUser: string;

  constructor(
    private http: HttpClient
  ) {}

  login(user: { username: string, password: string }): Observable<boolean> {
    return this.http.post<any>(`${config.apiUrl}/wp-json/jwt-auth/v1/token`, user)
      .pipe(
        tap(tokens => {
          this.loggedUser = tokens.user_display_name;
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
    this.isAuthenticated$ = false;
    this.loggedUser = null;
    return this.isLoggedIn();
  }

  isLoggedIn() {
    return !!this.getJwtToken();
  }

  getJwtToken() {
    return localStorage.getItem(this.JWT_TOKEN);
  }

  private doLoginUser(tokens: Tokens) {
    this.storeTokens(tokens);
  }

  private storeTokens(tokens: Tokens) {
    localStorage.setItem(this.JWT_TOKEN, tokens.token);
  }

  private removeTokens() {
    localStorage.removeItem(this.JWT_TOKEN);
  }
}
