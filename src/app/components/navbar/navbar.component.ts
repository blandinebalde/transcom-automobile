import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isMenuCollapsed = true;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('fr');
  }

  getCurrentLang(): string {
    return this.translate.currentLang;
  }

  switchLang(event: any) {
    const lang = event.target.value;
    this.translate.use(lang);
  }
}

