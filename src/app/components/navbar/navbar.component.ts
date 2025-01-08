import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
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

  // Close menu when clicking on a nav link
  closeMenu() {
    this.isMenuCollapsed = true;
  }

  // Close menu when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const navbar = document.getElementById('navbarNav');
    const toggleButton = document.getElementById('navbarToggler');

    // If navbar and toggle button exist and are not the clicked elements
    if (navbar && toggleButton) {
      const clickedInsideNavbar = navbar.contains(event.target as Node);
      const clickedToggleButton = toggleButton.contains(event.target as Node);

      // Close menu if click is outside navbar and not on toggle button
      if (!clickedInsideNavbar && !clickedToggleButton) {
        this.isMenuCollapsed = true;
      }
    }
  }
}

