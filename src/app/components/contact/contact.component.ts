import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive, NgbCollapse, TranslateModule],
  templateUrl: "./contact.component.html"
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  constructor(private languageService: LanguageService) { }

  onSubmit() {
    console.log('Form submitted:', this.formData);
    this.formData = {
      name: '',
      email: '',
      message: ''
    };
  }
}