import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private http: HttpClient,
    private cookieService: CookieService
  ) {}

  public getToken(): string | null {
    return localStorage.getItem('token');
  }

  public setToken(token: string): void {
    return localStorage.setItem('token', token);
  }

  public getRefreshToken(): string {
    return this.cookieService.get('refreshToken');
  }

  public refreshToken$(): Observable<any> {
    return this.http.get<any>(`/api/refresh`);
  }
}