import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PhoneService } from '../../service/Phones.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/Cart.service';
import { PhoneDTO } from '../../assets/types/Phone';
import { Phone } from '../../assets/types/Phone';
import { MapperPhone } from '../../mapper/mapperPhone';


@Component({
  selector: 'app-phone-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './app-phone-details.component.html',
  styleUrls: ['../../styles.css']
})
export class PhoneDetailsComponent implements OnInit {

  phone!:Phone;
  route: ActivatedRoute = inject(ActivatedRoute)
  servicePhone: PhoneService = inject(PhoneService)
  router: Router = inject(Router)
  serviceCart: CartService = inject(CartService)
  isPreviouslyPurchased: boolean = false

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const phoneId = +params.get('productId')!;
      const phone:Phone = this.servicePhone.getPhone(phoneId);
      phone == undefined ? this.router.navigate(['']) : this.phone = phone; 
      if (this.servicePhone.getPhoneLocalStorage(phoneId) != undefined) {
        this.isPreviouslyPurchased = true;
      }
    });
  }

  public pressBuy() {
    const phoneDTO:PhoneDTO = MapperPhone.convertPhoneDTO(this.phone)
    if (this.serviceCart.getPhone(phoneDTO.id)) {
        const phoneInCart = this.serviceCart.getPhone(phoneDTO.id);
        phoneInCart.cant = phoneInCart.cant+1;     
    }else{
      this.serviceCart.addPhone(phoneDTO)
    }

    this.router.navigate(['/cart']);
  }

}
