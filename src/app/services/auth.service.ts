import { Injectable } from "@angular/core";
import { HttpClient} from "@angular/common/http";

import { BehaviorSubject, Observable } from "rxjs";

import { TokenService } from "./token.service";
import { IAuthResponse, ISingIn, ISingUp } from "../interfaces";
import { catchError, tap } from "rxjs/operators";
// import { ErrorService } from "./error.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private _isAuthorized = new BehaviorSubject<boolean>(false);

    get isAuthorized$(): Observable<boolean> {
        return this._isAuthorized.asObservable();
    }

    get isAuthorized(): boolean {
        return this._isAuthorized.getValue();
    }

    constructor(
        private http: HttpClient,
        private tokenService: TokenService
        // private error: ErrorService
    ){}

    public isAuth$(): Observable<any> {
        const accessToken = this.tokenService.getToken();
        return this.http.get(`/api/isauth`, {headers: {Authorization: `Bearer ${accessToken}`}})
    }

    public singUp$(user: ISingUp): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`http://localhost:5000/signup`, user);
    }

    public singIn$(user: ISingIn): Observable<IAuthResponse> {
        return this.http.post<IAuthResponse>(`http://localhost:5000/signin`, user)
        // .pipe(
        //   catchError(err => this.error.handleError(err))
        //   tap((data) => this.login$(data))
        // )
    }

    // public login$(): Observable<any> {
    //     const {accessToken} = data;
    //     localStorage.setItem('token', accessToken);
    //     this._isAuthorized.next(true);
    // } 

    // public logout$(): Observable<any> {
    //     localStorage.removeItem('token');
    //     this._isAuthorized.next(true);
    //     return this.http.post(`/logout`, {});
    // }
}