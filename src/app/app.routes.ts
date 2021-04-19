import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LocationlistComponent } from './Locationlist/locationlist.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecordComponent } from './record/record.component';

export const APP_ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'locations', component:  LocationlistComponent},
  { path: 'records', component:  RecordComponent},
  { path: 'cart', component: CartComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', component: PagenotfoundComponent }
];
