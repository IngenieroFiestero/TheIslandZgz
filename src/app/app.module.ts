import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule, CollapseModule, TabsModule } from 'ngx-bootstrap';
import { HttpModule, Http} from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
//Clima
import { ClimaComponent } from './clima/clima.component';
import { ClimaService } from './clima/clima.service';
import { KelvinToCelsius } from './clima/kelvin2celsius.pipe';
//Bus
import { BusComponent } from './bus/bus.component';
import { BusService } from './bus/bus.service';
import { ParadaComponent } from './bus/parada-tuzsa.component';
import { LineaComponent } from './bus/linea.component';

//Translate
import { TranslateModule ,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    BusComponent,
    ParadaComponent,
    LineaComponent,
    KelvinToCelsius
  ],
  imports: [
    HttpClientModule,
    HttpModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory:  HttpLoaderFactory,
          deps: [Http]
        }
      }
    )
  ],
  providers: [BusService, ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
