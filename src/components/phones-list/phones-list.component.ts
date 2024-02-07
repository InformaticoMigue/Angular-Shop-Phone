import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../../service/Phones.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Phone } from '../../assets/types/Phone';
import { PhoneCardComponent } from '../phone-card/phone-card.component';


@Component({
  selector: 'app-phones-list',
  standalone: true,
  imports: [CommonModule, RouterLink, PhoneCardComponent],
  templateUrl: './phones-list.component.html',
  styleUrls: ['../../styles.css']
})
export class PhonesListComponent implements OnInit {

  phonesArray!:Phone[];

  constructor(private servicePhone:PhoneService) {}

  ngOnInit() {
    this.phonesArray = this.servicePhone.getAllPhones();
  }

}
