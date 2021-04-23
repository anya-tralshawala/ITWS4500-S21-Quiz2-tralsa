import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SolarComponent } from './solar/solar.component';
import { RouterModule, Routes } from '@angular/router';
import { CombinedComponent } from './combined/combined.component';
import { LunarComponent } from './lunar/lunar.component';
import { HttpService } from './http.service';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent},
  {path:'combined', component: CombinedComponent},
  {path:'solar', component: SolarComponent},
  {path:'lunar', component: LunarComponent}



];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SolarComponent,
    CombinedComponent,
    LunarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
