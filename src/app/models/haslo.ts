import {Firma} from "./firma";

export class Haslo {
  idHasla: number;
  haslo: string;
  nazwa: string;
  opis: string;
  dataUtworzenia: string;
  firma: Firma;


  constructor(haslo: string, nazwa: string, dataUtworzenia: any, firma: Firma, opis?: string, idHasla?: number) {
    console.log(`Add haslo: ${nazwa}`);
    this.haslo = haslo;
    this.nazwa = nazwa;
    this.firma = firma;
    this.dataUtworzenia = dataUtworzenia;
    this.opis = opis;
    this.idHasla = idHasla;
  }
}
