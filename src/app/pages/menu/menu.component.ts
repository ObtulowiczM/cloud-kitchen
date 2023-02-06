import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private service: OrderDetailsService, private router: Router) {}

  foodData: any;
  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

  buyDonut(id: number) {
    this.router.navigate(['menu/', id]);
  }
}
