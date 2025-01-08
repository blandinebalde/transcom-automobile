import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { CarService } from '../../services/car.service';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../shared/shared.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

@Component({
  selector: 'app-cars',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, RouterModule, SharedModule, NgbCarouselModule],
  templateUrl: './cars-v1.component.html',
  styleUrls: ['./cars-v1.component.scss']
})
export class CarsComponent {
  cars: Car[] = [];
  activeCard: number | null = null;
  showingAll: boolean = false;
  displayedCars: any[] = [];
  selectedCar: Car | null = null;


  

  constructor(private carService: CarService, private translate: TranslateService, private router: Router) {
    this.carService.getCars().subscribe(cars => this.cars = cars);
    this.displayedCars = this.cars.slice(0, 3);
    this.selectedCar = null;
  }

  navigateToReservation() {
    this.router.navigate(['/contact']);
  }

  openCarDetails(car: Car) {    
    this.selectedCar = car;
    console.log(this.selectedCar);
  }

  closeCarDetails() {
    this.selectedCar = null;
  }

  showAllCars() {
    this.showingAll = true;
    this.displayedCars = this.cars;
  }

  showLessCars() {
    this.showingAll = false;
    this.displayedCars = this.cars.slice(0, 3);
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