import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.model';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ProductComponent, RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  products = signal<Product[]>([]);
  categories = signal<string[]>([]);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private categoryService = inject(CategoryService);
  @Input() category_id?: string;



  ngOnInit(){
    this.getCategories();
  }

  ngOnChanges(changes: SimpleChanges){
    this.getProducts();
  }

  private getProducts(){
    this.productService.getProducts(this.category_id)
    .subscribe({
        next: (data) => {
          this.products.set(data);
        },
        error: () => {}
    });
  }

  private getCategories(){
    this.categoryService.getCategories()
    .subscribe({
        next: (data) => {
          this.categories.set(data);
        },
        error: () => {}
    });
  }

  addToCart(product: Product){
    this.cartService.addToCart(product);
  }
}
