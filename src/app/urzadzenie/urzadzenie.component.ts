import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {UrzadzenieService} from '../services/urzadzenie.service';
import {Urzadzenie, RODZAJE} from '../models/urzadzenie';
import { NgForm } from '@angular/forms';
import {Firma} from '../models/firma';
import {isUndefined} from "util";

@Component({
  selector: 'app-urzadzenie',
  templateUrl: './urzadzenie.component.html',
  styleUrls: ['./urzadzenie.component.css', '../lista-urzadzen/lista-urzadzen.component.css']
})
export class UrzadzenieComponent implements OnInit, OnChanges {

  constructor(private urzadzenieService: UrzadzenieService) { }

  @Output() urzadzenieAddedOrEdited = new EventEmitter();
  @Input() firma: Firma;
  @Input() idFirmy: number;
  rodzaje = RODZAJE;
  @Output() hideMe = new EventEmitter<boolean>();
  @Input() editing = false;
  @Input() selectedUrzadzenie: Urzadzenie;
  title: string;

  modelUrzadzenia = new Urzadzenie('', '', '', '', '', '', this.firma, '', '');

  changeTitle() {
    if (this.editing) {
      this.title = `Edytuj urządzenie ${this.selectedUrzadzenie.nazwa}`;
    } else {
      this.modelUrzadzenia = new Urzadzenie('', '', '', '', '', '', this.firma, '', '');
      this.title = 'Dodaj urządzenie';
    }
  }

  ngOnChanges(changeRecord: SimpleChanges) {
    console.log(changeRecord.editing);
    if (!isUndefined(changeRecord.editing)) {
      if (!isUndefined(changeRecord.editing.currentValue)) {
        console.log('Changes: ');
        this.changeTitle();

      }
    }
    if (!isUndefined(changeRecord.selectedUrzadzenie)) {
      if (!isUndefined(changeRecord.selectedUrzadzenie.currentValue)) {
        console.log("Rodaj: ", this.selectedUrzadzenie.rodzaj);
        this.modelUrzadzenia = new Urzadzenie(this.selectedUrzadzenie.nazwa, this.selectedUrzadzenie.rodzaj, this.selectedUrzadzenie.status, this.selectedUrzadzenie.producent,
          this.selectedUrzadzenie.model, this.selectedUrzadzenie.nrSeryjny, this.selectedUrzadzenie.firma, this.selectedUrzadzenie.dataUtworzenia, this.selectedUrzadzenie.systemOperacyjny,
          this.selectedUrzadzenie.opis, this.selectedUrzadzenie.idUrzadzenia);
      }
    }
  }

  ngOnInit() {
    // console.log("Id firmy: ", this.firma.idFirmy);
  }

  onHideMe() {
    this.hideMe.emit(true);
  }

  onSubmit(form: NgForm) {
    this.modelUrzadzenia.dataUtworzenia = new Date().toJSON();
    // console.log("ID Firmy: ", this.firma.idFirmy);
    this.modelUrzadzenia.firma = this.firma;
    this.add(this.modelUrzadzenia);
    form.reset();
  }

  add(urzadzenie: Urzadzenie) {
    this.urzadzenieService.addUrzadzenie(urzadzenie).subscribe(urzadzeniee => {
      this.sendEmit();
    });
  }

  sendEmit() {
    this.urzadzenieAddedOrEdited.emit();
  }
}
