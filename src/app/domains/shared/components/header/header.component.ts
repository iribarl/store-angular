import { Component, inject, signal } from '@angular/core';

import { CartService } from '@shared/services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  private cartService = inject(CartService);

  cart = this.cartService.cart;
  totalPrice = this.cartService.totalPrice;
  hideSideMenu = signal(true);

  toogleSideMenu(){
    this.hideSideMenu.update(state => !state);
  }

}

