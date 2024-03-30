import {Component, HostListener, Input, OnInit} from '@angular/core';
import {IProduct, IProductSmall, MarketService} from "../market.service";

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss'
})
export class MarketComponent implements OnInit{
  @Input() products: IProductSmall[] = [];
  @Input() marketPrice: number = 0;
  newPrices: IProductSmall[] = [];

  constructor(private service: MarketService) {

  }

  ngOnInit() {
    this.newPrices = this.products.map(v => ({name: v.name, price: v.price}))
    console.log(this.newPrices)
  }


  onChanges(idx: number, event: KeyboardEvent) {
    if (event.key === 'Enter' || event.keyCode === 13) {
      this.service.changePrice(idx, this.marketPrice, this.newPrices[idx].price)
    }
  }
}
