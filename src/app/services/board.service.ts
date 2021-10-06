import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IBoard } from "../interfaces";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    
    constructor(
        private http: HttpClient
    ){}

    public getBoards$(): any {
        return this.http.get(`${environment.api}/boards`);
    }

    public createBoard$(board: IBoard): any {
        return this.http.post(`${environment.api}/board/create`, {name: board});
    }

    public deleteBoard$(id: string): any {
        return this.http.delete(`${environment.api}/board/${id}`);
    }
}