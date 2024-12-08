import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './cars.component.html'
})
export class CarsComponent {
  selectedCategory: string = '';
  
  cars: Car[] = [
    {
      id: 1,
      name: 'Mercedes-Benz S-Class',
      category: 'Luxury',
      price: 200,
      image: 'https://source.unsplash.com/800x600/?mercedes,s-class'
    },
    {
      id: 2,
      name: 'BMW X5',
      category: 'SUV',
      price: 150,
      image: 'https://source.unsplash.com/800x600/?bmw,x5'
    },
    {
      id: 3,
      name: 'Audi A6',
      category: 'Sedan',
      price: 130,
      image: 'https://source.unsplash.com/800x600/?audi,a6'
    }
  ];

  get filteredCars(): Car[] {
    return this.selectedCategory
      ? this.cars.filter(car => car.category === this.selectedCategory)
      : this.cars;
  }
}