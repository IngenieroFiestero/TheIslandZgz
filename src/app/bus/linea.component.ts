import { Component, Input } from '@angular/core';
import { DestinoTuzsa } from './destino-tuzsa';

@Component({
    selector: 'linea-component',
    templateUrl: './linea.component.html'
})
export class LineaComponent {
    @Input() linea: DestinoTuzsa;
}