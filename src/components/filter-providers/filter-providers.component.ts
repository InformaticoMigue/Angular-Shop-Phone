import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../service/Provider.service';
import { Provider } from '../../assets/types/Provider';

@Component({
  selector: 'app-filter-providers',
  templateUrl: './filter-providers.component.html',
  styleUrls: ['../../styles.css']
})
export class FilterProvidersComponent implements OnInit {

  providers!: Provider[];

  constructor(private providerService: ProviderService,
              ) { }

  ngOnInit() {
    this.providers = this.getAllProviders();
  }

  public getAllProviders():Provider[] {
    return this.providerService.getAllProviders();
  }
}
