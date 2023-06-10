import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService
  ) {}

  product: any;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.productService.getProductById(id).subscribe((res) => {
        this.product = { ...res.data };
      });
    });
  }
}
