import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private service: OrderDetailsService, private router: Router) {}

  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

  menuPage() {
    this.router.navigateByUrl('menu');
  }
}
