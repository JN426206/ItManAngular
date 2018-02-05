import { Component, OnInit } from '@angular/core';
import {Firma} from '../models/firma';
import {FirmaService} from '../services/firma.service';
import {getFile} from 'ts-node';
import {Adres} from '../models/adres';
import {AdresService} from '../services/adres.service';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css']
})
export class FirmaComponent implements OnInit {

  firmy: Firma[] = [];
  adres: Adres;

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

  add(nazwa: string, nip: string, regon: string) {
    console.log(`Adding firma: ${nazwa}`);
    this.firmaService.addFirma(new Firma(nazwa, nip, regon, new Adres('asd','asdasd','qweqwe','wdewad')))
    //  .subscribe( firma => this.firma = firma);
      .subscribe( firma => this.firmy.push(firma));
  }

}
