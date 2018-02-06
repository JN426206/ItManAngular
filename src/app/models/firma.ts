import {Adres} from './adres';

export class Firma {
  public idFirmy: number;
  public nazwa: string;
  public nip: string;
  public regon: string;
  public adres: Adres;

  public getId(): number{
    return this.idFirmy;
  }

  // constructor(obj?: any) {
  //   // this.idFirmy = (obj && obj.idFirmy) || Math.floor(Math.random() * 1000 );
  //   // this.nazwa = (obj && obj.nazwa) || '';
  //   // this.nip = (obj && obj.nip) || '';
  //   // this.regon = (obj && obj.regon) || '';
  //
  //   this.idFirmy = (obj.idFirmy && obj);
  //   this.nazwa = (obj && obj.nazwa) || '';
  //   this.regon = (obj && obj.regon) || '';
  //   this.nip = (obj && obj.nip) || '';
  //   this.adres = (obj && obj.adres);
  // }

  constructor(nazwa: string, nip: string, regon: string,  adres: Adres, id_Firmy?: number) {
    console.log(`Add firma: ${nazwa} ${adres.miasto}`);
    this.idFirmy = id_Firmy;
    this.nazwa = nazwa;
    this.regon = regon;
    this.nip = nip;
    this.adres = adres;
  }

}
