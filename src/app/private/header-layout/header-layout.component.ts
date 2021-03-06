import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header-layout',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {

  public userName: string = '';

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userName = this.auth.userName.split('', 2).join('');
  }

  logout() {
    this.auth.logout$().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
