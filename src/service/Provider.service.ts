import { Injectable } from '@angular/core';
import phones from "../assets/phones.json"
import { Provider } from '../assets/types/Provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor() { }

  public getAllProviders(): Provider[]{
    
    return phones.map(phone => phone.provider)
  }

  public getProvider(id: number): Provider{
    const providers = this.getAllProviders();
    return providers.find(provider => provider.id == id)!;
  }

  public getProviderByName(name: string): Provider{
    const providers = this.getAllProviders();
    return providers.find(provider => provider.name == name)!;
  }


}
