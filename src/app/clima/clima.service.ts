import { Injectable } from '@angular/core';
import { Headers, RequestOptions, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

//import { ParadaTuzsa } from './parada-tuzsa';

@Injectable()
export class ClimaService {
    //url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/horaria/50297?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJpbmdlbmllcm9maWVzdGVyb0BnbWFpbC5jb20iLCJqdGkiOiI3YmJiYzQyZS0xMzBmLTQzYmQtOWQ3Ni1iMGIyYjhjNzdlNDIiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTUwNjY0MjIzMSwidXNlcklkIjoiN2JiYmM0MmUtMTMwZi00M2JkLTlkNzYtYjBiMmI4Yzc3ZTQyIiwicm9sZSI6IiJ9.uU4FXrSw7-k28xfya5Nn6DdalJNGP5T-u9XPJZ_E2H8";
    //url = "https://opendata.aemet.es/opendata/sh/cad17b27";
    url = "http://api.openweathermap.org/data/2.5/forecast?q=Zaragoza,es&appid=5a6e7efce77d2a909f2a56ffab3fae49";


    constructor(private http: Http) { }
    getClima(): Observable<Response> {
        //Periodic Petition
        let headers: Headers = new Headers();
        headers.set('Access-Control-Allow-Origin', '*');
        headers.set('Accept', "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8");
        let options = new RequestOptions({ headers: headers });
        return IntervalObservable.create(10000).flatMap((i) => this.http.get(this.url));
    }
}