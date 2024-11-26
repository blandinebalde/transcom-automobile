import { Component } from '@angular/core';

@Component({
  selector: 'app-policies',
  standalone: true,
  template: `
    <div class="container section-padding">
      <h1 class="text-center mb-5">Rental Policies</h1>
      
      <div class="row">
        <div class="col-md-6 mb-4">
          <h2>Requirements</h2>
          <ul class="list-group">
            <li class="list-group-item">Valid driver's license</li>
            <li class="list-group-item">Minimum age: 25 years</li>
            <li class="list-group-item">Credit card for security deposit</li>
          </ul>
        </div>
        
        <div class="col-md-6 mb-4">
          <h2>Insurance</h2>
          <ul class="list-group">
            <li class="list-group-item">Basic insurance included</li>
            <li class="list-group-item">Optional full coverage available</li>
            <li class="list-group-item">24/7 roadside assistance</li>
          </ul>
        </div>
      </div>

      <div class="mt-4">
        <h2>FAQ</h2>
        <div class="accordion" id="faqAccordion">
          <div class="accordion-item">
            <h3 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                What is the rental duration?
              </button>
            </h3>
            <div id="faq1" class="accordion-collapse collapse show">
              <div class="accordion-body">
                Minimum rental period is 24 hours. Long-term rentals are available with special rates.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class PoliciesComponent {}