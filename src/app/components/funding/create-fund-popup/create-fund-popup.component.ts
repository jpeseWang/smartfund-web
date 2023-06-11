import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { FundingService } from '../../../services';

@Component({
  selector: 'app-create-fund-popup',
  templateUrl: './create-fund-popup.component.html',
  styleUrls: ['./create-fund-popup.component.css'],
})
export class CreateFundPopupComponent implements OnInit {
  id: string = '';
  title: string;
  content: string;
  responseStatus: number | null = null;
  minDeadline = '';
  maxDeadline = '';
  constructor(
    public dialogRef: MatDialogRef<CreateFundPopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fundingService: FundingService
  ) {
    this.title = data.title.text;
    this.content = data.content.text;
    this.id = data.id.id;
  }

  ngOnInit(): void {}
  minDLChanged($event: any) {
    this.minDeadline = $event.target.value.toISOString();
  }
  maxDLChanged($event: any) {
    this.maxDeadline = $event.target.value.toISOString();
  }

  createFund(
    amount: string,
    minAmount: string,
    maxAmount: string,
    comment: string
  ) {
    this.fundingService
      .fundToPoll({
        fundingPollId: this.id,
        amount,
        comment,
        minAmount: Number(minAmount),
        maxAmount: Number(maxAmount),
        minDeadline: new Date(),
        maxDeadline: new Date(),
      })
      .subscribe((res) => {
        console.log(res);
        window.location.href = res.data.payment_url;
      });
  }
}
