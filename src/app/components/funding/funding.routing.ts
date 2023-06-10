import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FundingComponent } from './funding/funding.component';
import { FundingPollComponent } from './funding-poll/funding-poll.component';

const routes: Route[] = [
  {
    path: '',
    component: FundingComponent,
  },
  {
    path: ':id',
    component: FundingPollComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundingRoutingModule {}
