import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FundingComponent } from './funding/funding.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { CreatePollPopupComponent } from './create-poll-popup/create-poll-popup.component';
import { FundingPollComponent } from './funding-poll/funding-poll.component';
import { CreateFundPopupComponent } from './create-fund-popup/create-fund-popup.component';
import { FundingRoutingModule } from './funding.routing';

@NgModule({
  declarations: [
    FundingComponent,
    CreatePollPopupComponent,
    FundingPollComponent,
    CreateFundPopupComponent,
  ],
  imports: [
    CommonModule,
    FundingRoutingModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
})
export class FundingModule {}
