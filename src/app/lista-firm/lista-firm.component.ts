import { Component, OnInit } from '@angular/core';
import {Adres} from '../models/adres';
import {Firma} from '../models/firma';
import {FirmaService} from '../services/firma.service';
import {AdresService} from '../services/adres.service';

@Component({
  selector: 'app-lista-firm',
  templateUrl: './lista-firm.component.html',
  styleUrls: ['./lista-firm.component.css'],
})
export class ListaFirmComponent implements OnInit {

  firmy: Firma[] = [];
  selectedFirma: Firma;

  constructor(private firmaService: FirmaService, private adresService: AdresService) { }

  ngOnInit() {
    this.getFirmy();
  }

  getFirmy(): void {
    this.firmaService.getFirmy()
      .subscribe(firmy => {
        this.firmy = firmy.map( el => new Firma(el.nazwa, el.nip, el.regon, el.adres, el.idFirmy));
      });
  }

  onSelect(firma: Firma): void {
    if ( this.selectedFirma === firma ) {
      delete this.selectedFirma;
    } else {
      this.selectedFirma = firma;
    }
  }
}
