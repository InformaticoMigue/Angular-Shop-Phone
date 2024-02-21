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
    return phones.filter(phone => phone.provider.id == provider.id)!
  }

  public getPhoneLocalStorage(id:number) {
    const phonesPurchase:Phone[] = JSON.parse(localStorage.getItem("phonesPurchase")!)
    
    return phonesPurchase.find(p => p.id == id)
    
  }

  

  

}
