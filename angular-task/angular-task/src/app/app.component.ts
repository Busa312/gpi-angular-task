import { Component } from '@angular/core';
import {IProduct, IProductSmall, MarketService} from "./market.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  products: IProduct[] = [];
  firstMarket: IProductSmall[] = [];
  secondMarket: IProductSmall[] = [];
  thirdMarket: IProductSmall[] = [];
  constructor(private service: MarketService) {
    this.service.init();
    this.service.products.subscribe({
      next: value => {
        this.products = value;
        this.firstMarket = value.map(val => ({name: val.name, price: val.firstMarketPrice}))
        this.secondMarket = value.map(val => ({name: val.name, price: val.secondMarketPrice}))
        this.thirdMarket = value.map(val => ({name: val.name, price: val.thirdMarketPrice}))
      }
    })
  }
}
