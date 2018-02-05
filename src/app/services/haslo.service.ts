import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Haslo} from '../models/haslo';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const apiUrl: String = 'http://127.0.0.1:8080';

const HttpOptions = {
  headers: new HttpHeaders( {'Content-type': 'application/json'})
};

@Injectable()
export class HasloService {
  private hasloUrl = `${apiUrl}/api/hasla/`;

  constructor(
    private http: HttpClient
  )  { }

  getHasla(): Observable<Haslo[]> {
    return this.http.get<Haslo[]>(this.hasloUrl).pipe(
      catchError(this.handleError('getFirma',[]))
    );
  }

  getHasloByIdFirmy(idFirmy: number): Observable<Haslo[]> {
    return this.http.get<Haslo[]>(`${this.hasloUrl}${idFirmy}`);
  }

  getHasloById(idHasla: number): Observable<Haslo> {
    return this.http.get<Haslo>(`${this.hasloUrl}haslo/${idHasla}`);
  }

  addUrzadzenie(haslo: Haslo): Observable<Haslo> {
    return this.http.post<Haslo>(this.hasloUrl, haslo, HttpOptions).pipe(
      catchError(this.handleError<Haslo>('addHaslo'))
    );
  }

  private handleError<T> (operation = 'operatrion', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);

    };
  }
}
