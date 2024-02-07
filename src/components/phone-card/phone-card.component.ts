import { Component, Input, OnInit } from '@angular/core';
import { Phone } from '../../assets/types/Phone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-phone-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './phone-card.component.html',
  styleUrls: ['../../styles.css']
})
export class PhoneCardComponent implements OnInit {

  @Input() 
  phone! :Phone

  constructor() { }

  ngOnInit() {
  }

}
