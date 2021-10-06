import { Component, OnInit } from '@angular/core';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  constructor(
    public boards: BoardService
  ) { }

  ngOnInit(): void {
    this.boards.getBoards$().subscribe((board: any) => console.log(board))
  }
}
