import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NgbCarousel, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgbCarousel, NgbSlide, SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.createDynamicBubbles();
  }

  ngAfterViewInit() {
    this.initScrollAnimation();
  }

  private initScrollAnimation() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // Add visible class when element is in view
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Observe all sections and their children
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
      
      // Observe content elements within sections
      section.querySelectorAll('.content, .row > div, .about-content').forEach(element => {
        observer.observe(element);
      });
    });

    // Optional: Smooth scroll behavior
    this.initSmoothScroll();
  }

  private initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href')!);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  createDynamicBubbles() {
    const wrapper = document.querySelector('.bubbles-wrapper');
    if (!wrapper) return;

    setInterval(() => {
      const bubble = document.createElement('div');
      bubble.className = 'bubble';
      
      // Random size between 20px and 80px
      const size = Math.random() * 60 + 20;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      
      // Random position
      bubble.style.left = `${Math.random() * 100}%`;
      
      // Random animation duration
      const duration = Math.random() * 7 + 8; // 8-15 seconds
      bubble.style.animationDuration = `${duration}s`;
      
      wrapper.appendChild(bubble);
      
      // Remove bubble after animation
      setTimeout(() => {
        bubble.remove();
      }, duration * 1000);
    }, 1000); // Create new bubble every second
  }
}