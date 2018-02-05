import { Component, OnInit } from '@angular/core';
import {FirmaService} from '../services/firma.service';
import {ActivatedRoute} from '@angular/router';
import {HasloService} from '../services/haslo.service';
import {Haslo} from '../models/haslo';
import {Firma} from '../models/firma';

@Component({
  selector: 'app-lista-hasel',
  templateUrl: './lista-hasel.component.html',
  styleUrls: ['./lista-hasel.component.css']
})
export class ListaHaselComponent implements OnInit {

  hasla: Haslo[];
  firma: Firma;
  idFirmy: number;

  constructor(private route: ActivatedRoute, private firmaService: FirmaService, private hasloService: HasloService) { }


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      console.log(`${params['idFirmy']}`);
      this.idFirmy = +params['idFirmy'];
      this.getFirma(this.idFirmy);
    });
  }

  getFirma(idFirmy: number): void {
    this.firmaService.getFirma(this.idFirmy).subscribe( firma => {
      this.firma = firma;
      this.getHasloByFirma(idFirmy);
    });
  }

  getHasloByFirma(idFirmy: number): void {
    this.hasloService.getHasloByIdFirmy(idFirmy).subscribe( hasla => this.hasla = hasla);
  }

}
