import { Component, OnInit, DoCheck, IterableDiffer, IterableDiffers, ChangeDetectorRef } from '@angular/core';

import { ClimaService } from './clima.service';
import {ClimaData} from './clima-data';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

@Component({
  selector: 'clima-component',
  templateUrl: './clima.component.html'
})
export class ClimaComponent implements OnInit, DoCheck {
  datosClima : ClimaData;
  constructor(private climaService: ClimaService, private changeDetector: ChangeDetectorRef) { }

  getClima(): void {
    this.climaService.getClima().map(res => res.json()).subscribe(
      res => {
        this.datosClima = res;
        console.log(this.datosClima);
      },
      err => {
        console.log(err);
        this.getClima();
      });

    //console.log(res);
    //this.changeDetector.markForCheck();
  }
  ngOnInit(): void {
    this.getClima();
  }
  ngDoCheck(): void {
  }
}