import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

const routes: Route[] = [
  {
    path: '',
    component: MarketplaceComponent,
  },
  {
    path: 'product/:id',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketplaceRoutingModule {}
