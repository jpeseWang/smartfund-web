import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FundingComponent } from './funding/funding.component';

const routes: Route[] = [
  {
    path: '',
    component: FundingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundingRoutingModule {}
