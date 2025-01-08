import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-policies',
  standalone: true,
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss'],
  imports: [SharedModule]
})
export class PoliciesComponent {
  activePanel: string = 'faq1'; // Default open panel
  constructor(private languageService: LanguageService ) { }

  togglePanel(panel: string) {
    this.activePanel = this.activePanel === panel ? '' : panel;
  }
}