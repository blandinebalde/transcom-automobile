import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Car {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  // Add other car properties as needed
}

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars: Car[] = [
    {
      id: 1,
      name: 'Range Rover', 
      category: 'Luxury',
      price: 200,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Luxury SUV with premium features and exceptional comfort'
    },
    {
      id: 2,
      name: 'BMW X5',
      category: 'SUV', 
      price: 150,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Versatile SUV combining luxury and performance'
    },
    {
      id: 3,
      name: 'Audi A6',
      category: 'Sedan',
      price: 130,
      image: 'https://images.unsplash.com/photo-1606152421802-db97b9c7a11b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      description: 'Executive sedan with advanced technology and elegant design'
    }
  ];

  getCarById(id: number): Observable<Car | undefined> {
    const car = this.cars.find(car => car.id === id);
    return of(car);
  }

  getCars(): Observable<Car[]> {
    return of(this.cars);
  }
}