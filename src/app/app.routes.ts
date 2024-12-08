import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CarsComponent } from './components/cars/cars.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'policies', component: PoliciesComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];