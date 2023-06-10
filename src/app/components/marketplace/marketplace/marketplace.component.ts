import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductPopupComponent } from '../product-popup/product-popup.component';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.scss'],
})
export class MarketplaceComponent implements OnInit {
  activeTab: string = 'shop';
  products: any[] = [];

  constructor(
    private readonly productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = [...res.data];
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(ProductPopupComponent, dialogConfig);
  }

  numberWithCommas(x: string) {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x)) x = x.replace(pattern, '$1,$2');
    return x;
  }
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
}
