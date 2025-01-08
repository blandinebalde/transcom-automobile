import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CarService } from '../../services/car.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterModule, SharedModule],
  templateUrl: './cars-v1.component.html',
  styleUrls: ['./cars-v1.component.scss']
})
export class CarsComponent {
  cars: Car[] = [];
  activeCard: number | null = null;

  

  constructor(private carService: CarService, private translate: TranslateService, private router: Router) {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  navigateToReservation() {
    this.router.navigate(['/contact']);
  }

  toggleDiscount(index: number) {
    this.activeCard = this.activeCard === index ? null : index;
  }

  selectedCategory: string = '';
  
 

  get filteredCars(): Car[] {
    return this.selectedCategory
      ? this.cars.filter(car => car.category === this.selectedCategory)
      : this.cars;
  }
}