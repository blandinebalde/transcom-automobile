import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Car, CarService } from '../../services/car.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html', 
  styleUrls: ['./booking.component.scss'],
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule]
})
export class BookingComponent implements OnInit {
  carId?: number;
  car?: Car;
  bookingForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private carService: CarService
  ) {
    this.bookingForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.params['id']);
    if (!isNaN(id)) {
      this.carId = id;
      this.loadCarDetails();
    }
  }

  loadCarDetails() {
    if (!this.carId) return;
    
    this.carService.getCarById(this.carId).subscribe(
      car => {
        if (car) {
          this.car = car;
        } else {
          console.error('Car not found');
        }
      },
      error => {
        console.error('Error loading car details:', error);
      }
    );
  }

  onSubmit() {
    if (this.bookingForm.valid) {
      const bookingData = {
        car: this.car,
        booking: this.bookingForm.value
      };
      console.log(bookingData);
      // Handle form submission
    }
  }
}