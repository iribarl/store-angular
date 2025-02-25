import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com';

  getCategories(){
    return this.http.get<string[]>(`${this.apiUrl}/products/categories`);
  }

}
