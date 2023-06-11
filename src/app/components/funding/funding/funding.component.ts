import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FundingService } from '../../../services';
import { CreatePollPopupComponent } from '../create-poll-popup/create-poll-popup.component';
import { FundingPollComponent } from '../funding-poll/funding-poll.component';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: ['./funding.component.scss'],
})
export class FundingComponent implements OnInit {
  fundingPolls: any[] = [];

  constructor(
    private dialog: MatDialog,
    private fundingService: FundingService
  ) {}

  ngOnInit(): void {
    this.fundingService.getAllPolls().subscribe((res) => {
      this.fundingPolls = res.data;
      console.log(res);
    });
  }

  openPoll() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    this.dialog.open(CreatePollPopupComponent, dialogConfig);
  }
}
