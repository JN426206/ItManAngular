export class Adres {
  idAdres: number;
  ulica: string;
  nrBudynku: string;
  miasto: string;
  kodPocztowy: string;
  telefon: string;

  constructor(ulica: string, nrBudynku: string, miasto: string, kodPocztowy: string, telefon?: string, idAdres?: number) {
    this.idAdres = idAdres;
    this.telefon = telefon;
    this.ulica = ulica;
    this.nrBudynku = nrBudynku;
    this.miasto = miasto;
    this.kodPocztowy = kodPocztowy;
  }

}
