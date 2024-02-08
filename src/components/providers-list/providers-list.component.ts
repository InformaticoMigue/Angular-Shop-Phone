import { Component, OnInit, inject } from '@angular/core';
import { ProviderService } from '../../service/Provider.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Provider } from '../../assets/types/Provider';
import { ProviderCardComponent } from '../provider-card/provider-card.component';

@Component({
  selector: 'app-providers-list',
  standalone: true,
  imports: [CommonModule,RouterLink,ProviderCardComponent],
  templateUrl: './providers-list.component.html',
  styleUrls: ['../../styles.css']
})
export class ProvidersListComponent implements OnInit {

  providers!:Provider[];
  providerService: ProviderService = inject(ProviderService)

  ngOnInit() {
    const providerAll = this.providerService.getAllProviders();
    this.providers = this.removeDuplicate(providerAll);
  }

  public removeDuplicate(providers:Provider[]):Provider[]{
    const newProviders:Provider[] = [];
    
    for (const provider of providers) {
      if (!newProviders.some(existingProvider => existingProvider.id === provider.id)) {
        newProviders.push(provider);
      }
    }
    
    return newProviders;
  }

}
