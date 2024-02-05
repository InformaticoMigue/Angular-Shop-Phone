import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../service/Provider.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Provider } from '../../assets/types/Provider';


@Component({
  selector: 'app-provider-details',
  standalone: true,
  templateUrl: './provider-details.component.html',
  styleUrls: ['../../styles.css']
})

export class ProviderDetailsComponent implements OnInit {

  provider!: Provider;

  constructor(private providerService: ProviderService,
    private activatedRoute: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const providerId = +params.get('providerId')!;
      const provider: Provider = this.providerService.getProvider(providerId);
      provider == null ? this.route.navigate(['']) : this.provider = provider;
    })
  }

}
