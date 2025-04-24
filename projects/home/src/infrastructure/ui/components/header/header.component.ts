import { CommonModule } from '@angular/common';
import { Component, Signal, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
    public isLoggedIn: string;
    confirmedLogin = signal(true);
  constructor(private router: Router) { 
    this.isLoggedIn = localStorage.getItem('userActive');
    this.confirmedLogin = signal(this.isLoggedIn == "true"? true : false);
  }

  public name = localStorage.getItem('name');
  
  logout(){
    localStorage.removeItem('userActive');
    localStorage.removeItem('name');
    this.router.navigate(['/']);
    this.confirmedLogin.set(false)
  }

}

