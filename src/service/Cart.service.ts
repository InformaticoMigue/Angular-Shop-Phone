import { Injectable } from '@angular/core';
import { PhoneDTO } from '../assets/types/Phone';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  phones:PhoneDTO[];

  constructor() {
    this.phones = [];
  }

  public addPhone(phone: PhoneDTO) {
    this.phones.push(phone);
  }

  public getAllPhones():PhoneDTO[] {
    return this.phones;
  }

  public delPhone(id: number) {    
    this.phones = this.phones.filter(ph => ph.id !== id)
  }

  public getPhone(id:number):PhoneDTO {
    return this.phones.find(ph => ph.id === id)!;
  }

  

}
