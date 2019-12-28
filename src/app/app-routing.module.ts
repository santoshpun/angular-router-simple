import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact/:id', component: ContactDetailComponent },
  { path: 'about', component: AboutComponent },
  { path: 'users', component: UserListComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
