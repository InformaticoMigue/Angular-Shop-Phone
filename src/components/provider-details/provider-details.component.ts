import { Component, OnInit, inject } from '@angular/core';
import { ProviderService } from '../../service/Provider.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Provider } from '../../assets/types/Provider';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-provider-details',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './provider-details.component.html',
  styleUrls: ['../../styles.css']
})

export class ProviderDetailsComponent implements OnInit {

  provider!: Provider;
  providerService: ProviderService = inject(ProviderService)
  activatedRoute: ActivatedRoute = inject(ActivatedRoute)
  route: Router = inject(Router)
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      const providerId = +params.get('providerId')!;
      const provider: Provider = this.providerService.getProvider(providerId);
      provider == null ? this.route.navigate(['']) : this.provider = provider;
    })
  }

}
