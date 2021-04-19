import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { APP_ROUTES } from './app.routes';
import { LocationlistComponent } from './Locationlist/locationlist.component';
import { AppnavComponent } from './appnav/appnav.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { TruncatePipe } from './truncate.pipe';
import { RecordComponent } from './record/record.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LocationlistComponent,
    AppnavComponent,
    CartComponent,
    CheckoutComponent,
    PagenotfoundComponent,
    TruncatePipe,
    RecordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
