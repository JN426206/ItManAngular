import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirmaComponent } from './firma/firma.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FirmaService} from './services/firma.service';
import {AdresService} from './services/adres.service';
import { ListaFirmComponent } from './lista-firm/lista-firm.component';
import { ListaUrzadzenComponent } from './lista-urzadzen/lista-urzadzen.component';
import {UrzadzenieService} from './services/urzadzenie.service';
import { ListaHaselComponent } from './lista-hasel/lista-hasel.component';
import {HasloService} from './services/haslo.service';
import {FormsModule} from '@angular/forms';
import { UrzadzenieComponent } from './urzadzenie/urzadzenie.component';
import { LoginComponent } from './login/login.component';
import { AlertComponent } from './alert/alert.component';
import {AuthenticationService} from './services/authentication.service';
import {AlertService} from './services/alert.service';
import {AuthGuard} from './guards/index';
import {UserService} from './services/user.service';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { HomeComponent } from './home/home.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    FirmaComponent,
    ListaFirmComponent,
    ListaUrzadzenComponent,
    ListaHaselComponent,
    UrzadzenieComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    routing
  ],
  providers: [
    FirmaService,
    AdresService,
    UrzadzenieService,
    HasloService,
    AuthenticationService,
    AlertService,
    AuthGuard,
    UserService, {
    provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
