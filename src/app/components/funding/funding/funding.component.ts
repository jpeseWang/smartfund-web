import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductPopupComponent } from '../../marketplace/product-popup/product-popup.component';
import { FundingPopupComponent } from '../funding-popup/funding-popup.component';
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

  fundingPolls: any[] = [
    {
      title: 'Environment',
      description: 'A project to help orphans',
      milestone: 21,
      deadline: 23 / 8 / 2023,
    },
  ];

  constructor(
    private readonly productService: ProductService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res) => {
      this.products = [...res.data];
    });
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '500px';

    dialogConfig.data = {
      title: {
        text: 'Enter your Funding Details',
      },
      content: {
        text: 'Please provide the details for your project.',
      },
    };

    this.dialog.open(FundingPopupComponent, dialogConfig);
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
