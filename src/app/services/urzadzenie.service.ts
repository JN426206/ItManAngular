import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Urzadzenie} from '../models/urzadzenie';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const apiUrl: String = 'http://127.0.0.1:8080';

const HttpOptions = {
  headers: new HttpHeaders( {'Content-type': 'application/json'})
};

@Injectable()
export class UrzadzenieService {
  private urzadzenieUrl = `${apiUrl}/api/urzadzenia/`;

  constructor(
    private http: HttpClient
  )  { }

  getUrzadzenia(): Observable<Urzadzenie[]> {
    return this.http.get<Urzadzenie[]>(this.urzadzenieUrl).pipe(
      catchError(this.handleError('getFirma',[]))
    );
  }

  getUrzadzeniaByIdFirmy(idFirmy: number): Observable<Urzadzenie[]> {
    return this.http.get<Urzadzenie[]>(`${this.urzadzenieUrl}${idFirmy}`);
  }

  getUrzadzenieById(idUrzadzenia: number): Observable<Urzadzenie> {
    return this.http.get<Urzadzenie>(`${this.urzadzenieUrl}urzadzenie/${idUrzadzenia}`);
  }

  addUrzadzenie(urzadzenie: Urzadzenie): Observable<Urzadzenie> {
    return this.http.post<Urzadzenie>(this.urzadzenieUrl, urzadzenie, HttpOptions).pipe(
      catchError(this.handleError<Urzadzenie>('addUrzadzenie'))
    );
  }

  private handleError<T> (operation = 'operatrion', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      return of(result as T);

    };
  }
}
