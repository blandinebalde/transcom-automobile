import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CarService } from '../../services/car.service';

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
  imports: [NgFor, NgIf, FormsModule, RouterModule],
  templateUrl: './cars.component.html'
})
export class CarsComponent {
  cars: Car[] = [];

  constructor(private carService: CarService) {
    this.carService.getCars().subscribe(cars => this.cars = cars);
  }

  selectedCategory: string = '';
  
 

  get filteredCars(): Car[] {
    return this.selectedCategory
      ? this.cars.filter(car => car.category === this.selectedCategory)
      : this.cars;
  }
}