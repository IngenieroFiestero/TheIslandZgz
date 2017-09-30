import { Component, Input } from '@angular/core';
import { ParadaTuzsa } from './parada-tuzsa';

@Component({
    selector: 'parada-component',
    templateUrl: './parada-tuzsa.component.html'
})
export class ParadaComponent {
    @Input() parada: ParadaTuzsa;
}