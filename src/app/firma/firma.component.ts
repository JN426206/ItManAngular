import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Firma} from '../models/firma';
import {FirmaService} from '../services/firma.service';
import {Adres} from '../models/adres';
import {AdresService} from '../services/adres.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css', '../lista-firm/lista-firm.component.css']
})
export class FirmaComponent implements OnInit {

  modelAdresu = new Adres('', '', '', '');
  modelFirmy = new Firma('', '', '', this.modelAdresu);


  constructor(private firmaService: FirmaService, private adresService: AdresService) { }

  @Output() fimaAdded = new EventEmitter();

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    console.log(`Adding firma`, this.modelFirmy.nazwa);
    this.add(new Firma(this.modelFirmy.nazwa, this.modelFirmy.nip, this.modelFirmy.regon,
      new Adres(this.modelAdresu.ulica, this.modelAdresu.nrBudynku, this.modelAdresu.miasto, this.modelAdresu.kodPocztowy, this.modelAdresu.telefon)));
    form.reset();
  }

  add(firma: Firma) {
    this.firmaService.addFirma(firma)
    //  .subscribe( firma => this.firma = firma);
      .subscribe( firmaa => {this.fimaAdded.emit()});
  }

  get diagnostic() { return JSON.stringify(this.modelFirmy).toString() + JSON.stringify(this.modelAdresu); }
}
