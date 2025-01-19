import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Product } from '@shared/models/product.model';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, RouterLinkWithHref],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  
  @Input({required: true}) model!: Product;

  @Output() addToCart = new EventEmitter();

  isHeightGreater = signal(true);


  addToCartHandler() {
    this.addToCart.emit(this.model);
  }

  onImageLoad(event: Event): void {
    const imgElement = event.target as HTMLImageElement;
    const width = imgElement.naturalWidth;
    const height = imgElement.naturalHeight;    
    if(width > height)
      this.isHeightGreater.set(false);
  }

}

