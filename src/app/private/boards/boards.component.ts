import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IBoard } from 'src/app/interfaces';
import { BoardService } from 'src/app/services/board.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  public boardsAr: any;

  form: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required
    ])
  });

  constructor(
    public boards: BoardService,
    private router: Router,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    // console.log(this.auth.userId());
    this.boards.getBoards$().subscribe((board: any) => {
      this.boardsAr = board;
    })
  }

  boardPage() {
    this.router.navigate(['private', 'dashboard']);
  }

  deleteBoard(id: string) {
    this.boards.deleteBoard$(id).subscribe(()=>{
      this.boardsAr = this.boardsAr.filter((board: any) => board.id !== id);
    });
  }

  submit() {
    const board: IBoard = this.form.value.name;
    this.boards.createBoard$(board).subscribe(()=> {
      this.form.reset();
    })
  }
}
