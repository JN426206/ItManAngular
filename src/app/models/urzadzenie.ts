import {Firma} from "./firma";

export class Urzadzenie {
  idUrzadzenia: number;
  nazwa: string;
  rodzaj: string;
  status: string;
  producent: string;
  model: string;
  nrSeryjny: string;
  dataUtworzenia: any;
  systemOperacyjny: string;
  opis: string;
  firma: Firma;

  constructor(nazwa: string, rodzaj: string, status: string, producent: string, model: string, nrSeryjny: string, firma: Firma, dataUtworzenia: any, systemOperacyjny?: string, opis?: string,
              idUrzadzenia?: number) {
    console.log(`Add firma: ${nazwa}`);
    this.nazwa = nazwa;
    this.status = status;
    this.producent = producent;
    this.model = model;
    this.nrSeryjny = nrSeryjny;
    this.firma = firma;
    this.dataUtworzenia = dataUtworzenia;
    this.systemOperacyjny = systemOperacyjny;
    this.opis = opis;
    this.idUrzadzenia = idUrzadzenia;
  }

}
