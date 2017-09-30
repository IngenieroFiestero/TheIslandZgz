import { Component, ChangeDetectorRef } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService, private changes: ChangeDetectorRef) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    translate.use('es');
  }
  changeLang(lang: string) {
    console.log("Usando " + lang);
    this.translate.use(lang);
  }
  title = 'app';
  languaje = 'Español';
  public alertMe(): void {
    setTimeout(function (): void {
      alert('You\'ve selected the alert tab!');
    });
  }

}
