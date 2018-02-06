import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Firma} from '../models/firma';
import {of} from 'rxjs/observable/of';
import {catchError} from 'rxjs/operators';

const apiUrl: String = 'http://127.0.0.1:8080';

const HttpOptions = {
  headers: new HttpHeaders( {'Content-type': 'application/json'})
};

@Injectable()
export class FirmaService {
  private firmaUrl = `${apiUrl}/api/firmy/`;

  constructor(
    private http: HttpClient
  )  { }

  getFirmy(): Observable<Firma[]> {
    return this.http.get<Firma[]>(this.firmaUrl).pipe(
      catchError(this.handleError('getFirma',[]))
    );
  }

  getFirma(idFirmy: number): Observable<Firma> {
    let params = new HttpParams().set('idFirmy', `${idFirmy}`);
    return this.http.get<Firma>(`${this.firmaUrl}${idFirmy}`);
  }

  addFirma(firma: Firma): Observable<Firma> {
    return this.http.post<Firma>(this.firmaUrl, firma, HttpOptions).pipe(
      catchError(this.handleError<Firma>('addFirma'))
    );
  }

  removeFirma(firma: Firma) {
    return this.http.delete(`${this.firmaUrl}${firma.getId()}`);
  }

  private handleError<T> (operation = 'operatrion', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);

    };
  }
}
