import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Instrument } from './instrument-list/instrument';

const URL = 'https://62c42c7eabea8c085a6e4c44.mockapi.io/api/v1/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Instrument[]>{
    return this.http.get<Instrument[]>(URL)
           .pipe(
            tap((instruments: Instrument[]) => instruments.forEach((instrument) => instrument.quantity = 0))
           );
  }
}
