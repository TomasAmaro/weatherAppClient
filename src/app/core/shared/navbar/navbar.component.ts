import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isNavbarCollapsed = true;
  public isLoggedIn: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.isSubjectLoggedIn().subscribe(
      res => this.isLoggedIn = res,
    );
  }

  public logout(): void {
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }

}
