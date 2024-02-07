import { Component, Input, OnInit } from '@angular/core';
import { Provider } from '../../assets/types/Provider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-provider-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './provider-card.component.html',
  styleUrls: ['../../styles.css']
})
export class ProviderCardComponent implements OnInit {

  @Input()
  provider!: Provider

  constructor() { }

  ngOnInit() {
  }

}
