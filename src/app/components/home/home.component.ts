import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor() {}

  quote =
    '“People who love themselves, don’t hurt other people. The more we hate ourselves, the more we want others to suffer.”';

  ngOnInit() {}
}
