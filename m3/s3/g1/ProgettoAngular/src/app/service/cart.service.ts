import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    favorites: any[] = [];
    cart: any[] = [];

    addToFavorites(product: any): void {
        if (!this.favorites.includes(product)) {
            this.favorites.push(product);
        }
    }

    addToCart(product: any): void {
        if (!this.cart.includes(product)) {
            this.cart.push(product);
        }
    }
}
