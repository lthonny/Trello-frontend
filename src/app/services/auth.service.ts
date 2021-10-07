import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import { BehaviorSubject, Observable } from "rxjs";

import { TokenService } from "./token.service";
import { IAuthResponse, ISingIn, ISingUp } from "../interfaces";
import { catchError, tap } from "rxjs/operators";
// import { ErrorService } from "./error.service";

import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _isAuthorized = new BehaviorSubject<boolean>(false);
    private id: any;
    public userName: string = '';

    get isAuthorized$(): Observable<boolean> {
        return this._isAuthorized.asObservable();
    }

    get isAuthorized(): boolean {
        return this._isAuthorized.getValue();
    }

    constructor(
        private http: HttpClient,
        private tokenService: TokenService,
        // private error: ErrorService
    ){
      this.isAuth$().subscribe(() => {
        this._isAuthorized.next(true);
      }, () => {
        this._isAuthorized.next(false);
      })
    }

    public isAuth$(): Observable<any> {
        const accessToken = this.tokenService.getToken();
        return this.http.get(`${environment.api}/isauth`, {headers: {Authorization: `Bearer ${accessToken}`}})
    }

    public singUp$(user: ISingUp): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`${environment.api}/signup`, user);
    }

    public singIn$(user: ISingIn): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`${environment.api}/login`, user)
        .pipe(
          // catchError(err => this.error.handleError(err)),
          tap((data) => this.login$(data))
        )
    }

    public login$(data: IAuthResponse) {
        this.id = data.user.id;
        const {accessToken} = data;
        this.userName = data.user.name;
        localStorage.setItem('token', accessToken);
        this._isAuthorized.next(true);
    }

    public userId() {
      return this.id;
    }

    public logout$(): Observable<any> {
        localStorage.removeItem('token');
        this._isAuthorized.next(false);
        return this.http.post(`${environment.api}/logout`, {});
    }
}
