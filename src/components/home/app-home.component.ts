import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProvidersListComponent } from '../providers-list/providers-list.component';
import { PhonesListComponent } from '../phones-list/phones-list.component';
          

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,ProvidersListComponent,PhonesListComponent],
  templateUrl: './app-home.component.html',
  styleUrls: ['../../styles.css']
})
export class AppHomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
