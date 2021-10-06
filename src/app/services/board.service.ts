import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { IBoard } from "../interfaces";

@Injectable({
    providedIn: 'root'
})
export class BoardService {
    
    constructor(
        private http: HttpClient
    ){}

    public getBoards$(): any {
        return this.http.get('http://localhost:5000/boards');
    }

    public createBoard$(board: IBoard): any {
        return this.http.post('http://localhost:5000/boards/create', {name: board});
    }

    public deleteBoard$(id: string): any {
        return this.http.delete(`http://localhost:5000/boards/${id}`);
    }
}