import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FundingService } from '../../../services';
import { CreatePollPopupComponent } from '../create-poll-popup/create-poll-popup.component';

@Component({
  selector: 'app-funding',
  templateUrl: './funding.component.html',
  styleUrls: [
    './funding.component.scss',
    './child1.scss',
    './child2.scss',
    './child3.scss',
  ],
})
export class FundingComponent implements OnInit {
  activeTab: string = 'shop';
  products: any[] = [];

  fundingPolls: any[] = [];

  constructor(
    private dialog: MatDialog,
    private fundingService: FundingService
  ) {}

  ngOnInit(): void {
    this.fundingService.getAllPolls().subscribe((res) => {
      this.fundingPolls = res.data;
    });
  }

  openPoll() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    dialogConfig.data = {
      title: {
        text: 'Enter your Project Details',
      },
      content: {
        text: 'Please provide the details for your project.',
      },
    };

    this.dialog.open(CreatePollPopupComponent, dialogConfig);
  }

  openFund() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    dialogConfig.data = {
      title: {
        text: 'Enter your Funding Details',
      },
      content: {
        text: 'Please provide the details for your funding.',
      },
    };

    this.dialog.open(CreatePollPopupComponent, dialogConfig);
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
