import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container section-padding">
      <h1 class="text-center mb-5">About LuxCars Rental</h1>
      <div class="row">
        <div class="col-md-6">
          <h2>Our Story</h2>
          <p>Founded in 2010, LuxCars Rental has been providing premium car rental services to our valued customers. We pride ourselves on our exceptional fleet of vehicles and outstanding customer service.</p>
        </div>
        <div class="col-md-6">
          <h2>Our Mission</h2>
          <p>To provide our customers with the finest luxury vehicles and an unmatched rental experience, ensuring comfort, safety, and satisfaction in every journey.</p>
        </div>
      </div>
    </div>
  `
})
export class AboutComponent {}