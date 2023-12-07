import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { CartService } from './service/cart.service';

@Component({
    selector: '.app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    title(title: any) {
      throw new Error('Method not implemented.');
    }
    products: any[] = [];

    constructor(private apiService: ApiService, private cartService: CartService) {}

    ngOnInit(): void {
        this.apiService.getProducts().subscribe((data) => {
            this.products = data;
        });
    }

    addToFavorites(product: any): void {
        this.cartService.addToFavorites(product);
    }

    addToCart(product: any): void {
        this.cartService.addToCart(product);
    }
}
