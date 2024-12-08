import { Component } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarousel, NgbSlide, SharedModule],
  templateUrl: './home.component.html',
  styles: [`
    .hero {
      margin-bottom: 2rem;
    }
    .carousel-caption {
      background: rgba(0,0,0,0.5);
      padding: 20px;
      border-radius: 10px;
    }
    .picsum-img-wrapper img {
      width: 100%;
      height: 600px;
      object-fit: cover;
    }
  `]
})
export class HomeComponent {
  constructor(private languageService: LanguageService) { }
}