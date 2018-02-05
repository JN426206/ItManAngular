import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirmaComponent } from './firma/firma.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {FirmaService} from './services/firma.service';
import {AdresService} from './services/adres.service';
import { ListaFirmComponent } from './lista-firm/lista-firm.component';
import { ListaUrzadzenComponent } from './lista-urzadzen/lista-urzadzen.component';

const ROUTES: Routes = [
  { path: '', redirectTo:  'firmy', pathMatch: 'full'},
  { path: 'firmy', component: ListaFirmComponent },
  { path: 'urzadzenia/:idFirmy', component: ListaUrzadzenComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FirmaComponent,
    ListaFirmComponent,
    ListaUrzadzenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [FirmaService, AdresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
