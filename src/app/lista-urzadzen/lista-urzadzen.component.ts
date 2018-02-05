import { Component, OnInit } from '@angular/core';
import {Firma} from "../models/firma";
import {ActivatedRoute} from "@angular/router";
import {FirmaService} from "../services/firma.service";

@Component({
  selector: 'app-lista-urzadzen',
  templateUrl: './lista-urzadzen.component.html',
  styleUrls: ['./lista-urzadzen.component.css']
})
export class ListaUrzadzenComponent implements OnInit {

  firma: Firma;
  private sub: any;
  idFirmy: number;
  urzadzenia

  constructor(private route: ActivatedRoute, private firmaService: FirmaService) { }

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

    });
  }

}
