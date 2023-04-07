import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DialogModule} from '@angular/cdk/dialog';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductCardComponent } from './products/product-card/product-card.component';
import { RatingLabelComponent } from './shared/components/rating-label/rating-label.component';
import { NavbarComponent } from './shared/components/navbar/navbar/navbar.component';
import { ProductDetailsComponent } from './products/product-details/product-details/product-details.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { SignUpComponent } from './shared/pages/sign-up/sign-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormExampleComponent } from './shared/pages/form-example/form-example.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';
import { AuthInterceptorService } from './core/services/auth/auth-interceptor.service';
import { ManageComponent } from './admin/manage/manage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ViewEditComponent } from './admin/products/view-edit/view-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    RatingLabelComponent,
    NavbarComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    FormExampleComponent,
    UserProfileComponent,
    ManageComponent,
    ViewEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    DialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
