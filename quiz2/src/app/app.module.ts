import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolarComponent } from './solar/solar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { LunarComponent } from './lunar/lunar.component';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path:'form', component: FormComponent},
  {path:'solar', component: SolarComponent},
  {path:'lunar', component: LunarComponent}



];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarComponent,
    FormComponent,
    LunarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
