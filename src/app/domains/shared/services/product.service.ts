import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '@shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com';

  getProducts(category?: string){
    if(category){
      return this.http.get<Product[]>(`${this.apiUrl}/products/category/${category}`);
    }
    return this.http.get<Product[]>(`${this.apiUrl}/products`);
  }

  getProduct(id: string){    
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }

  getProductsInCategory(category: string){
    return this.http.get<Product[]>(`${this.apiUrl}/category/${category}`);
  }
}


/** 
 * 
 * 
 * **/