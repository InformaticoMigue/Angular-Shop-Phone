import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ProviderService } from '../../service/Provider.service';
import { Provider } from '../../assets/types/Provider';
import { Phone } from '../../assets/types/Phone';
import { PhoneService } from '../../service/Phones.service';
import { PhoneCardComponent } from '../phone-card/phone-card.component';
import { PhonesListComponent } from '../phones-list/phones-list.component';

 
@Component({
  selector: 'app-filter-provider',
  standalone: true,
  imports: [CommonModule, PhoneCardComponent,PhonesListComponent],
  templateUrl: './filter-provider.component.html',
  styleUrls: ['../../styles.css']
})
export class FilterProviderComponent implements OnInit {
  
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  providerService = inject(ProviderService);
  phoneService = inject(PhoneService);
  phonesByProvider:Phone[] = [];


  setPhonesByProvider(provider:Provider){
    this.phonesByProvider = this.phoneService.getPhonesByProvider(provider)
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const providerName = this.formatNameToJson(params.get('providerName')!);
      const provider:Provider = this.providerService.getProviderByName(providerName);
      provider == undefined ? this.router.navigate(['']) : this.setPhonesByProvider(provider)
    })
  }

  formatNameToJson(providerName:string) {
    return providerName = providerName[0].toUpperCase() + providerName.substring(1,providerName.length)
  }
}
