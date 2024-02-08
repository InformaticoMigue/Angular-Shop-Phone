import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProvidersListComponent } from '../providers-list/providers-list.component';
import { PhonesListComponent } from '../phones-list/phones-list.component';
import { PhoneService } from '../../service/Phones.service';
import { Phone } from '../../assets/types/Phone';
          

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,ProvidersListComponent,PhonesListComponent],
  templateUrl: './app-home.component.html',
  styleUrls: ['../../styles.css']
})
export class AppHomeComponent implements OnInit {

  phoneService: PhoneService = inject(PhoneService); 
  phones:Phone[] = this.phoneService.getAllPhones();
  
  ngOnInit() {
  }

}
