import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VacancyDetailsComponent } from './vacancy-details/vacancy-details.component';
import { CompaniesComponent } from './companies/companies.component';
import { CompanyVacanciesComponent } from './company-vacancies/company-vacancies.component';
import { VacancyTopTenComponent } from './vacancy-top-ten/vacancy-top-ten.component';

import { CompanyDetailsComponent } from './company-details/company-details.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { HomeComponent} from "./home/home.component";
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./login/login.component";
import {VacancyTopFiveteenComponent} from "./vacancy-top-fiveteen/vacancy-top-fiveteen.component";
import {AboutComponent} from "./about/about.component";


const routes: Routes = [
  { path: 'companies', component: CompaniesComponent },
  { path: 'companies/:id', component: CompanyDetailsComponent},
  { path: 'companies/:id/vacancies', component: CompanyVacanciesComponent },
  { path: 'vacancies', component: VacanciesComponent},
  { path: 'vacancies/:id', component: VacancyDetailsComponent },
  { path: 'top_ten', component: VacancyTopTenComponent },
  { path: 'home', component: HomeComponent },
  {path:'auth',component:AuthComponent},
  {path:'login',component:LoginComponent},
  {path:'top_fiveteen',component:VacancyTopFiveteenComponent},
  {path:'about',component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
