import { Injectable } from '@angular/core';
import phones from '../assets/phones.json';
import { Phone } from '../assets/types/Phone';
import { Provider } from '../assets/types/Provider';

@Injectable({
  providedIn: 'root'      
})
export class PhoneService {

  constructor() { }

  public getAllPhones(): Phone[] {
    return phones;
  }

  public getPhone(id: number):Phone {
    return phones.find(phone => phone.id == id)!;
  }
  
  public getPhonesByProvider(provider:Provider): Phone[]{
    return phones.filter(phone => phone.provider.name == provider.name)!
  }

  

  

}
