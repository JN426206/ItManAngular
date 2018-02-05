import {Adres} from './adres';

export class Firma {
  idFirmy: number;
  nazwa: string;
  nip: string;
  regon: string;
  adres: Adres;

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

  constructor(nazwa: string, nip: string, regon: string,  adres: Adres, idFirmy?: number) {
    console.log(`Add firma: ${nazwa} ${adres.miasto}`);
    this.idFirmy = idFirmy;
    this.nazwa = nazwa;
    this.regon = regon;
    this.nip = nip;
    this.adres = adres;
  }

}
