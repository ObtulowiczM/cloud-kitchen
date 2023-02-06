import { Injectable } from '@angular/core';
import { FOOD_DETAILS } from './food-details.mock';

@Injectable({
  providedIn: 'root',
})
export class OrderDetailsService {
  constructor() {}

  foodDetails = FOOD_DETAILS;
}
