import { Routes } from '@angular/router';
import { AppHomeComponent } from '../components/home/app-home.component';
import { CartComponent } from '../components/cart/cart.component';
import { PhoneDetailsComponent } from '../components/phone-details/app-phone-details.component';
import { ProviderDetailsComponent } from '../components/provider-details/provider-details.component';
import { FilterProviderComponent } from '../components/filter-provider/filter-provider.component';

export const routes: Routes = [
    {path: '', component: AppHomeComponent},
    {path:'cart', component: CartComponent},
    {path: 'product/:productId', component: PhoneDetailsComponent},
    {path: 'providers/:providerId', component: ProviderDetailsComponent},
    {path: 'products/:providerName', component: FilterProviderComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},

];
