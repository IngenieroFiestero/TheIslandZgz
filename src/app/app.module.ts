import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule,CollapseModule,TabsModule } from 'ngx-bootstrap';
import {HttpModule,Http} from '@angular/http';
//Clima
import { ClimaComponent } from './clima/clima.component';
import { ClimaService } from './clima/clima.service';
//Bus
import { BusComponent } from './bus/bus.component';
import { BusService } from './bus/bus.service';
import {ParadaComponent} from './bus/parada-tuzsa.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    BusComponent,
    ParadaComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [BusService,ClimaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
