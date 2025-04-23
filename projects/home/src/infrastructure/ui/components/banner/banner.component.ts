import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-banner',
  imports: [CommonModule, RouterModule, MatIconModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {
  constructor(private router: Router) {}
  
  navigateToCandidates(): void {
    this.router.navigate(['/candidates']);
  }
}
