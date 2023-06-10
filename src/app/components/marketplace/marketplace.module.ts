import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { ProductsComponent } from './products/products.component';
import { MarketplaceRoutingModule } from './marketplace.routing';
import { ProductPopupComponent } from './product-popup/product-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
  declarations: [
    MarketplaceComponent,
    ProductsComponent,
    ProductPopupComponent,
  ],
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
})
export class MarketplaceModule {}
