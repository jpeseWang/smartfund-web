import { Injectable } from '@angular/core';
import { ApiConfigService } from './api-config.service';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private readonly apiConfigService: ApiConfigService) {}

  createProduct(data: any) {
    return this.apiConfigService.post<any>(`marketplace/product`, data);
  }

  getAllProducts() {
    return this.apiConfigService.get<any>(`marketplace/product`);
  }

  getProductById(id: string) {
    return this.apiConfigService.get<any>(`marketplace/product/${id}`);
  }
}
