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
    },
    {
      id: 4,
      name: 'Mercedes S-Class',
      category: 'Luxury',
      price: 250,
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Flagship luxury sedan with unparalleled comfort and innovation'
    },
    {
      id: 5,
      name: 'Toyota Camry',
      category: 'Sedan',
      price: 100,
      image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Reliable mid-size sedan with excellent fuel efficiency'
    },
    {
      id: 6,
      name: 'Porsche Cayenne',
      category: 'Luxury',
      price: 220,
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Sports SUV offering exceptional performance and luxury'
    },
    {
      id: 7,
      name: 'Honda CR-V',
      category: 'SUV',
      price: 120,
      image: 'https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Compact SUV perfect for family adventures'
    },
    {
      id: 8,
      name: 'Lexus ES',
      category: 'Sedan',
      price: 160,
      image: 'https://images.unsplash.com/photo-1549925862-990ac5b34e35?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Premium sedan combining comfort and reliability'
    },
    {
      id: 9,
      name: 'Bentley Continental',
      category: 'Luxury',
      price: 300,
      image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ultra-luxury grand tourer with exceptional craftsmanship'
    },
    {
      id: 10,
      name: 'Tesla Model S',
      category: 'Luxury',
      price: 180,
      image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Premium electric sedan with cutting-edge technology'
    },
    {
      id: 11,
      name: 'Volkswagen Tiguan',
      category: 'SUV',
      price: 110,
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Compact SUV with German engineering and versatility'
    },
    {
      id: 12,
      name: 'Hyundai Tucson',
      category: 'SUV',
      price: 90,
      image: 'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Modern SUV with advanced features and great value'
    },
    {
      id: 13,
      name: 'Rolls-Royce Ghost',
      category: 'Luxury',
      price: 400,
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
      description: 'Ultimate luxury sedan representing the pinnacle of refinement'
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