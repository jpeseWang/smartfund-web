import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductsComponent } from './products/products.component';
import { MarketplaceRoutingModule } from './marketplace.routing';
import { ProductPopupComponent } from './product-popup/product-popup.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    MarketplaceComponent,
    ProductsComponent,
    ProductPopupComponent,
  ],
  imports: [CommonModule, MarketplaceRoutingModule, MatDialogModule],
})
export class MarketplaceModule {}
