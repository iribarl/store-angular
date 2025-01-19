import { CommonModule } from '@angular/common';
import { Component, inject, Input, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export default class ProductDetailComponent {
  @Input() id?: string;
  product = signal<Product | null>(null);
  cover = signal('');

  private productService = inject(ProductService);
  private cart = inject(CartService);

  ngOnInit(){
    if(this.id){
      this.productService.getProduct(this.id)
      .subscribe({
        next: (data) => {
          this.product.set(data);
          if(data.image.length > 0)
            this.cover.set(data.image);
        },
        error: () => {}
      });
    }      
  }

  changeCoverHandler(newUrl: string){
    this.cover.set(newUrl);
  }

  addToCart(){
    const product = this.product();
    if(product){
      this.cart.addToCart(product);
    }
  }

}
