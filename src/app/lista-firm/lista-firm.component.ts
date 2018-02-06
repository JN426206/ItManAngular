import {Component, OnInit, Output} from '@angular/core';
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
  showBoxAdd = false;
  showDelModalV = false;
  editingFirma = false;
  firmaToDelete: Firma;

  constructor(private firmaService: FirmaService, private adresService: AdresService) { }


  ngOnInit() {
    this.getFirmy();
    this.editingFirma = false;
  }

  onNewFirma(firma: Firma) {
    // console.log("new firma: ", firma.getId());
    this.showBoxAdd = false;
    this.getFirmy();
  }

  getFirmy(): void {
    this.firmaService.getFirmy()
      .subscribe(firmy => {
        this.firmy = firmy.map( el => new Firma(el.nazwa, el.nip, el.regon, el.adres, el.idFirmy));
      });
  }

  delFirma(firma: Firma) {
    console.log(`Deleting: ${firma.nazwa}`);
    this.firmaService.removeFirma(firma).subscribe(firmaa => {
      this.showDelModal(false);
      this.getFirmy();
    });
  }

  onSelect(firma: Firma): void {
    if ( this.selectedFirma === firma ) {
      delete this.selectedFirma;
    } else {
      this.selectedFirma = firma;
    }
  }

  showDelModal(show: boolean, firma?: Firma) {
    this.firmaToDelete = firma;
    this.showDelModalV = show;
  }

  showOrHideBoxAddEdit(show: boolean, edit?: boolean, firma?: Firma): void {
    this.showBoxAdd = show;
    this.firmaToDelete = firma;
    this.editingFirma = edit;
  }

}
