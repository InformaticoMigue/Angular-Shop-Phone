import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './app-navbar.component.html',
  styleUrls: ['../../styles.css']
})
export class AppNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
