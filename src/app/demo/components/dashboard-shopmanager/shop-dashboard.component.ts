import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './shop-dashboard.component.html',
  styleUrl: './shop-dashboard.component.scss'
})
export class ShopDashboardComponent {
  currentButton: string = 'All'; // Initial button state
  
  toggleButton(): void {
    // Toggle between 'All' and 'Available'
    this.currentButton =
      this.currentButton === 'All' ? 'Available' : 'All';
  }
}
