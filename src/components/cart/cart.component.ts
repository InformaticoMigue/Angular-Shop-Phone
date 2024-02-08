import { Component, OnInit, inject } from '@angular/core';
import { CartService } from '../../service/Cart.service';
import { CommonModule } from '@angular/common';
import { PhoneDTO } from '../../assets/types/Phone';
import { PhoneService } from '../../service/Phones.service';
import { RegisterPurchaseComponent } from '../register-purchase/register-purchase.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RegisterPurchaseComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['../../styles.css']
})
export class CartComponent implements OnInit {

  phones:PhoneDTO[] = [];
  serviceCart:CartService = inject(CartService);
  servicePhone: PhoneService = inject(PhoneService);

  ngOnInit() {
    this.phones = this.getAllPhones();
  }
  
  public incrementPhone(phone:PhoneDTO):void{
    phone.cant++;
    const originalPrice = this.servicePhone.getPhone(phone.id).price;
    phone.price = Math.floor(originalPrice * phone.cant);
  }

  public decrementPhone(phone:PhoneDTO):void{
    phone.cant--;
    if(phone.cant == 0){
      this.deletePhone(phone.id)
      return;
    }
    
    const originalPrice = this.servicePhone.getPhone(phone.id).price;
    phone.price = Math.floor(originalPrice * phone.cant);
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
