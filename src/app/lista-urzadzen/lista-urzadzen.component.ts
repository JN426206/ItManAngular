import { Component, OnInit } from '@angular/core';
import {Firma} from '../models/firma';
import {ActivatedRoute} from '@angular/router';
import {FirmaService} from '../services/firma.service';
import {Urzadzenie} from '../models/urzadzenie';
import {UrzadzenieService} from '../services/urzadzenie.service';

@Component({
  selector: 'app-lista-urzadzen',
  templateUrl: './lista-urzadzen.component.html',
  styleUrls: ['./lista-urzadzen.component.css']
})
export class ListaUrzadzenComponent implements OnInit {

  firma: Firma;
  private sub: any;
  idFirmy: number;
  urzadzenia: Urzadzenie[] = [];
  showDelModalV = false;
  showBoxAdd = false;
  editingUrzadzenie = false;
  selectedUrzadzenie: Urzadzenie;
  cbSecectedUrzadzania: Urzadzenie[] = [];
  showDelSelModalV = false;

  constructor(private route: ActivatedRoute, private firmaService: FirmaService, private urzadzenieService: UrzadzenieService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(`${params['idFirmy']}`);
      this.idFirmy = +params['idFirmy'];
      // this.firma.idFirmy = this.idFirmy;
      this.getFirma(this.idFirmy);
    });
  }

  showDellSelectedCb(show: boolean) {
    this.showDelSelModalV = show;
  }
  removeUrzadzenia() {
    this.showDelSelModalV = false;
    this.cbSecectedUrzadzania.forEach(urz => {
      this.removeUrzadzenie(urz);
    });
    this.cbSecectedUrzadzania = [];
  }
  selectAll(event: Event) {
    this.urzadzenia.forEach(urzadzenie => {
      (<HTMLInputElement>document.getElementById(`cb${urzadzenie.idUrzadzenia}`)).checked = (<HTMLInputElement>event.target).checked;
      this.updateCbSelectedUrzadzeni(urzadzenie, event);
    });
  }

  onNewUrzadzenie(urzadzenie: Urzadzenie) {
    // console.log("new firma: ", firma.getId());
    this.showBoxAdd = false;
    this.getUrzadzeniaByFirma(this.idFirmy);
  }

  getFirma(idFirmy: number): void {
    this.firmaService.getFirma(this.idFirmy).subscribe( firma => {
      this.firma = firma;
      this.getUrzadzeniaByFirma(idFirmy);
    });
  }

  getUrzadzeniaByFirma(idFirmy: number): void {
    this.urzadzenieService.getUrzadzeniaByIdFirmy(idFirmy).subscribe( urzadzenia => this.urzadzenia = urzadzenia);
  }


  removeUrzadzenie(urzadzenie: Urzadzenie) {
    console.log(`Deleting: ${urzadzenie.nazwa}`);
    this.urzadzenieService.removeUrzadzenie(urzadzenie).subscribe(urz => {
      this.showDelModal(false);
      this.getUrzadzeniaByFirma(this.idFirmy);
      this.editingUrzadzenie = false;
      this.showBoxAdd = false;
    });
  }

  showOrHideBoxAddEdit(show: boolean, editing?: boolean, urzadzenie?: Urzadzenie): void {
    this.showBoxAdd = show;
    this.editingUrzadzenie = editing;
    this.selectedUrzadzenie = urzadzenie;

  }

  showDelModal(show: boolean, urzadzenie?: Urzadzenie) {
    this.showDelModalV = show;
    this.selectedUrzadzenie = urzadzenie;
  }

  onTrClicked(urzadzenie: Urzadzenie) {
    console.log("Clicked :", urzadzenie.nazwa);
  }

  updateCbSelectedUrzadzeni(urzadzenie: Urzadzenie, event: Event) {
    if ((<HTMLInputElement>event.target).checked) {
      this.cbSecectedUrzadzania.push(urzadzenie);
    } else {
      var index = this.cbSecectedUrzadzania.indexOf(urzadzenie);
      this.cbSecectedUrzadzania.splice(index, 1);
    }
    console.log(this.cbSecectedUrzadzania.length, " : ", urzadzenie.nazwa, " selectCb: ", (<HTMLInputElement>event.target).checked);
  }
}
