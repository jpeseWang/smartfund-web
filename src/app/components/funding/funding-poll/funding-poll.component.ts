import { Component, OnInit, Inject } from '@angular/core';
import { FundingService } from '../../../services';
import { ActivatedRoute } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CreateFundPopupComponent } from '../create-fund-popup/create-fund-popup.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-funding-poll',
  templateUrl: './funding-poll.component.html',
  styleUrls: ['./funding-poll.component.css'],
})
export class FundingPollComponent implements OnInit {
  fundingPoll: any;
<<<<<<< Updated upstream
  polls: any[] = [];
=======
  options: any[] = [];
>>>>>>> Stashed changes

  constructor(
    @Inject(MAT_DIALOG_DATA) public poll: any,
    private fundingService: FundingService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<FundingPollComponent>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      this.fundingService.getPollById(id).subscribe((res) => {
        console.log(res);

        this.fundingPoll = res.data;
      });

      this.fundingService.getAvailOptions(id).subscribe((res) => {
        console.log(res);

        this.options = [...res.data.options];
      });
    });
  }
  openFund() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';
    this.dialog.open(CreateFundPopupComponent, dialogConfig);
  }
}
