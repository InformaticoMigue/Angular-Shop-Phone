import { PhoneDTO } from '../assets/types/Phone';
import { Phone } from '../assets/types/Phone';

export class MapperPhone {
    
  static convertPhoneDTO(phone:Phone):PhoneDTO{
    
        const phoneDTO:PhoneDTO = {
          id: phone.id,
          name: phone.name,
          description: phone.description,
          price: phone.price,
          provider: {
            id: phone.provider.id,
            name: phone.provider.name
          },
          image: phone.image,
          cant: 1
        };
    
        return phoneDTO;
  }

}
