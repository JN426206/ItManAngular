import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Firma} from '../models/firma';
import {FirmaService} from '../services/firma.service';
import {Adres} from '../models/adres';
import {AdresService} from '../services/adres.service';
import { NgForm } from '@angular/forms';
import {isUndefined} from 'util';

@Component({
  selector: 'app-firma',
  templateUrl: './firma.component.html',
  styleUrls: ['./firma.component.css', '../lista-firm/lista-firm.component.css']
})
export class FirmaComponent implements OnInit, OnChanges {

  modelAdresu = new Adres('', '', '', '');
  modelFirmy = new Firma('', '', '', this.modelAdresu);
  @Input() firma: Firma;
  title: string;

  constructor(private firmaService: FirmaService, private adresService: AdresService) { }

  @Output() fimaAdded = new EventEmitter<Firma>();
  @Output() hideMe = new EventEmitter<boolean>();
  @Input() editing = false;

  ngOnInit() {
    this.changeTitle();
  }

  changeTitle() {
    if (this.editing) {
      this.title = `Edytuj firmę ${this.firma.nazwa}`;
    } else {
      this.modelAdresu = new Adres('', '', '', '');
      this.modelFirmy = new Firma('', '', '', this.modelAdresu);
      this.title = 'Dodaj firmę';
    }
  }

  onHideMe() {
    this.hideMe.emit(true);
  }

  ngOnChanges(changeRecord: SimpleChanges) {
    console.log(changeRecord.editing);
    if (!isUndefined(changeRecord.editing)) {
      if (!isUndefined(changeRecord.editing.currentValue)) {
        console.log('Changes: ');
        this.changeTitle();

      }
    }
    if (!isUndefined(changeRecord.firma)) {
      if (!isUndefined(changeRecord.firma.currentValue)) {
        console.log(this.firma.nazwa);
        this.modelAdresu = new Adres(this.firma.adres.ulica, this.firma.adres.nrBudynku, this.firma.adres.miasto, this.firma.adres.kodPocztowy, this.firma.adres.telefon, this.firma.adres.idAdres);
        this.modelFirmy = new Firma(this.firma.nazwa, this.firma.nip, this.firma.regon, this.modelAdresu, this.firma.getId());
        this.firma = this.modelFirmy;
        this.changeTitle();

      }
    }
  }

  onSubmit(form: NgForm) {
    if (this.editing) {
      console.log(`Adding firma`, this.modelFirmy.nazwa);
      this.update(this.modelFirmy);
      form.reset();
    } else {
      console.log(`Adding firma`, this.modelFirmy.nazwa);
      this.add(new Firma(this.modelFirmy.nazwa, this.modelFirmy.nip, this.modelFirmy.regon,
        new Adres(this.modelAdresu.ulica, this.modelAdresu.nrBudynku, this.modelAdresu.miasto, this.modelAdresu.kodPocztowy, this.modelAdresu.telefon)));
      form.reset();
    }
  }

  update(firma: Firma) {
    this.firmaService.updateFirma(this.firma).subscribe(firmaa => {
      this.firma = firmaa;
      this.sendEmit(this.firma);
    });
  }

  add(firma: Firma) {
    this.firmaService.addFirma(firma)
    //  .subscribe( firma => this.firma = firma);
      .subscribe( firmaa => {
        console.log(firmaa.idFirmy.toLocaleString());
        this.firma = firmaa;
        this.sendEmit(this.firma);
      });
  }

  sendEmit(firma: Firma) {
    this.fimaAdded.emit(firma);
  }

  get diagnostic() { return JSON.stringify(this.modelFirmy).toString() + JSON.stringify(this.modelAdresu); }
}
