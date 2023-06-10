import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FundingComponent } from './funding/funding.component';
import { FundingPopupComponent } from './funding-popup/funding-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerInput } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CreatePollPopupComponent } from './create-poll-popup/create-poll-popup.component';
import { FundingPollComponent } from './funding-poll/funding-poll.component';
import { CreateFundPopupComponent } from './create-fund-popup/create-fund-popup.component';
@NgModule({
  declarations: [
    FundingComponent,
    FundingPopupComponent,
    CreatePollPopupComponent,
    FundingPollComponent,
    CreateFundPopupComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
  ],
})
export class FundingModule {}
