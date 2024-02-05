import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { PhoneService } from '../../service/Phones.service';
import { CommonModule } from '@angular/common';
import { CartService } from '../../service/Cart.service';
import { PhoneDTO } from '../../assets/types/Phone';
import { Phone } from '../../assets/types/Phone';
import { MapperPhone } from '../../mapper/mapperPhone';


@Component({
  selector: 'app-ProductDetails',
  standalone: true,
  providers: [MapperPhone],
  imports: [CommonModule, RouterLink],
  templateUrl: './app-product-details.component.html',
  styleUrls: ['../../styles.css']
})
export class ProductDetailsComponent implements OnInit {

  phone!:Phone;

  constructor(private route: ActivatedRoute, 
    private servicePhone: PhoneService,
    private router: Router,
    private serviceCart: CartService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const phoneId = +params.get('productId')!;
      const phone:Phone = this.servicePhone.getPhone(phoneId);
      phone == undefined ? this.router.navigate(['']) : this.phone = phone; 
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
