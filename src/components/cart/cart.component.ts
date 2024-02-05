import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/Cart.service';
import { CommonModule } from '@angular/common';
import { Phone, PhoneDTO } from '../../assets/types/Phone';
import { PhoneService } from '../../service/Phones.service';



@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['../../styles.css']
})
export class CartComponent implements OnInit {

  phones!:PhoneDTO[];

  constructor(private serviceCart: CartService,
              private servicePhone: PhoneService){}

  ngOnInit() {
    this.phones = this.getAllPhones();
  }
  
  public incrementCant(id:number):void{
    const phoneIncrement = this.getPhone(id);
    const originalPrice = this.servicePhone.getPhone(id).price;
    phoneIncrement.cant++;
    this.newPricePhone(phoneIncrement,originalPrice)
  }

  public decrementCant(id:number):void{
    const phoneDecrement = this.getPhone(id);
    const originalPrice = this.servicePhone.getPhone(id).price;
    phoneDecrement.cant--;
    this.newPricePhone(phoneDecrement,originalPrice)
    
    if (phoneDecrement.cant <= 0){
      this.serviceCart.delPhone(phoneDecrement.id)
      this.phones = this.getAllPhones();
    }
  }

  public newPricePhone(phoneDTO:PhoneDTO, originalPrice:number):void{
    phoneDTO.price = Math.round(originalPrice*phoneDTO.cant);
  }

  public getPhone(id:number):PhoneDTO{
    return this.serviceCart.getPhone(id);;
  }
  
  public getAllPhones():PhoneDTO[] {
    return this.serviceCart.getAllPhones();
  }

  public deletePhone(id:number):void {
    this.serviceCart.delPhone(id);
    this.phones = this.getAllPhones();    
  }

}
