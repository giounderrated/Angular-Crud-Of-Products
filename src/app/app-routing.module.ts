import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './admin/manage/manage.component';
import { AdminGuard } from './core/guards/admin/admin.guard';
import { AuthGuard } from './core/guards/auth.guard';
import { ProductDetailsComponent } from './products/product-details/product-details/product-details.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { FormExampleComponent } from './shared/pages/form-example/form-example.component';
import { HomeComponent } from './shared/pages/home/home.component';
import { LoginComponent } from './shared/pages/login/login.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { SignUpComponent } from './shared/pages/sign-up/sign-up.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  {
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path:'manage', component: ManageComponent,
    canActivate:[AuthGuard,AdminGuard]
  },
  { path: 'form-example', component: FormExampleComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
