import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isCollapsed: boolean = true;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  toggleMenu() {
     this.isCollapsed = !this.isCollapsed;
  }

  logout() {
    this.authService.logout().subscribe(() => {
        this.router.navigate(['/login']);
    });
  }
}
