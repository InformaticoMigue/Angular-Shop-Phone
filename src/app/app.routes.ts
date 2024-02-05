import { Routes } from '@angular/router';
import { AppHomeComponent } from '../components/product-list/app-home.component';
import { AppLoginComponent } from '../components/login/app-login.component';
import { CartComponent } from '../components/cart/cart.component';
import { ProductDetailsComponent } from '../components/product-details/app-product-details.component';
import { ProviderDetailsComponent } from '../components/provider-details/provider-details.component';

export const routes: Routes = [
    {path: '', component: AppHomeComponent},
    {path:'login', component: AppLoginComponent},
    {path:'cart', component: CartComponent},
    {path: 'products/:productId', component: ProductDetailsComponent},
    {path: 'providers/:providerId', component: ProviderDetailsComponent},
    {path: '**', redirectTo: '', pathMatch: 'full'},

];
