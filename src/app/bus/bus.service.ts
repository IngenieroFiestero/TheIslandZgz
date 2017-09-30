import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { ParadaTuzsa } from './parada-tuzsa';

@Injectable()
export class BusService {
    
    constructor(private http: Http) { }
    getNextBuses(id: string): Observable<Response> {
        const url = `https://www.zaragoza.es/sede/servicio/urbanismo-infraestructuras/transporte-urbano/poste-autobus/${id}`;
        return IntervalObservable.create(10000).flatMap((i) => this.http.get(url));
    }
}