import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Products {
  getProducts() {
    return [
      {
        productId: 'P-101',
        name: 'Logitech Mouse',
        description: '6 Butoon Mechanical Mouse',
        price: 899.00,
      },
      {
        productId: 'P-102',
        name: 'JBL BT Speaker',
        description: 'Waterproof Radio 360 Surround',
        price: 1099.00,
      },
      {
        productId: 'P-103',
        name: 'Mechanical Keyboard',
        description: 'Hot-swappable RGB Backlit',
        price: 2395.00,
      },
      {
        productId: 'P-104',
        name: 'Oculus Meta',
        description: 'All-in-one Gaming Headset',
        price: 22450.00,
      },
    ];
  }


}
