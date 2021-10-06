import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public columns:any = [
    {"title": "To Do"},
    {"title": "In Progress"},
    {"title": "Coded"},
    {"title": "Testing"},
    {"title": "Done"}
  ];

  constructor(
  ) { }

  ngOnInit(): void {}
}
