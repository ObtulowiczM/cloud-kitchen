import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderDetailsService } from 'src/app/services/order-details.service';

@Component({
  selector: 'app-menuform',
  templateUrl: './menuform.component.html',
  styleUrls: ['./menuform.component.css'],
})
export class MenuformComponent implements OnInit {
  constructor(
    private param: ActivatedRoute,
    private service: OrderDetailsService,
    private router: Router
  ) {}

  menuId: any;
  menuData: any;

  ngOnInit() {
    this.menuId = this.param.snapshot.paramMap.get('id');
    if (this.menuId) {
      this.menuData = this.service.foodDetails.filter((value) => {
        return value.id == this.menuId;
      });
    }
  }

  getBack() {
    this.router.navigateByUrl('/menu');
  }
}
