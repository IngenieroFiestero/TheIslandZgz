import { Component, OnInit, DoCheck, IterableDiffer, IterableDiffers, ChangeDetectorRef } from '@angular/core';
import { BusService } from './bus.service';
import { ParadaTuzsa } from './parada-tuzsa';

@Component({
    selector: 'bus-component',
    templateUrl: './bus.component.html'
})
export class BusComponent implements OnInit, DoCheck {
    datosParadas: ParadaTuzsa[] = [null, null];
    constructor(private busService: BusService, private changeDetector: ChangeDetectorRef) { }

    private paradas: string[] = ["tuzsa-401", "tuzsa-666"];
    getBuses(): void {
        for (var i: number = 0; i < this.paradas.length; i++) {
            this.getBusesFor(i);
        }
    }
    getBusesFor(i: number) {
        this.busService.getNextBuses(this.paradas[i]).map(res => {
            if (res.status < 200 || res.status >= 300) {
                throw new Error('This request has failed ' + res.status);
            }
            // If everything went fine, return the response
            else {
                return res.json();
            }
        }).subscribe(res => {
            this.datosParadas[i] = res;
            this.changeDetector.markForCheck();
        },
            err => {
                this.getBusesFor(i);
            });
    }
    ngOnInit(): void {
        this.getBuses();
    }
    ngDoCheck(): void {
    }
}