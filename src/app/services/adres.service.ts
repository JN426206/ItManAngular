import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Adres} from '../models/adres';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';

const apiUrl: String = 'http://127.0.0.1:8080';

const HttpOptions = {
  headers: new HttpHeaders( {'Content-type': 'application/json'})
};

@Injectable()
export class AdresService  {
  private adresUrl = `${apiUrl}/api/adres/`;

  constructor( private http: HttpClient )  { }

  getAdresy(): Observable<Adres[]> {
    return this.http.get<Adres[]>(this.adresUrl).pipe(
      catchError(this.handleError('getAdres:', []))
    );
  }

  addAdres(adres: Adres): Observable<Adres> {
    return this.http.post<Adres>(this.adresUrl, adres, HttpOptions).pipe(
      catchError(this.handleError<Adres>('addAdres'))
    );
  }

  private handleError<T> (operation = 'operatrion', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);

    };
  }
}
