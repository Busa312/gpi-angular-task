import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MarketService {
  constructor() { }
  products = new BehaviorSubject<IProduct[]>([]);
  init() {
    const products: IProduct[] = [];
    products.push(this.getNewProductsObject('First'));
    products.push(this.getNewProductsObject('Second'));
    products.push(this.getNewProductsObject('Third'));
    products.push(this.getNewProductsObject('Fourth'));
    products.push(this.getNewProductsObject('Fifth'));
    this.products.next(products);
  }
  changePrice(idx: number, market: number, price: number) {
    const currentProducts = this.products.getValue();
    const updatedProduct = { ...currentProducts[idx] };
    switch (market) {
      case 1: updatedProduct.firstMarketPrice = price; break;
      case 2: updatedProduct.secondMarketPrice = price; break;
      case 3: updatedProduct.thirdMarketPrice = price; break;
    }
    currentProducts[idx] = updatedProduct;
    this.products.next(currentProducts);
  }

  private getNewProductsObject(name: string) {
    return {
      name: name,
      firstMarketPrice: 0,
      secondMarketPrice: 0,
      thirdMarketPrice: 0,
    } as IProduct
  }
}

export interface IProduct {
  name: string;
  firstMarketPrice: number;
  secondMarketPrice: number;
  thirdMarketPrice: number;
}

export interface IProductSmall {
  name: string;
  price: number;
}
