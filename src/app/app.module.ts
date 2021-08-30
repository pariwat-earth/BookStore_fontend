import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HeaderComponent } from './header/header.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SignInComponent } from './sign-in/sign-in.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { BookitemComponent } from './bookitem/bookitem.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { BookmenageComponent } from './bookmenage/bookmenage.component';
import { OrderComponent } from './order/order.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDialogModule} from '@angular/material/dialog';


const routes: Routes = [
  {
    path:'',
    component:HomeMenuComponent
  },
  {
    path:'Home',
    component:HomeMenuComponent
  },
  {
    path:'Login',
    component:LoginComponent
  },
  {
    path:'Cart',
    component:CartComponent
  },
  {
    path:'Aboutus',
    component: AboutUsComponent
  },
  {
    path:'SignIn',
    component:SignInComponent
  },
  {
    path:'User',
    component:UserComponent
  },
  {
    path:'BookManage',
    component:BookmenageComponent
  },
  {
    path:'Order',
    component:OrderComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeMenuComponent,
    HeaderComponent,
    StoreComponent,
    LoginComponent,
    CartComponent,
    SignInComponent,
    BookitemComponent,
    UserComponent,
    BookmenageComponent,
    OrderComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTooltipModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatBadgeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
