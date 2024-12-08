import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NavbarModule } from './components/navbar/navbar.module';
import { App } from '../main';
import { routes } from './app.routes';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BookingComponent } from './components/booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    App,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NavbarModule,
    NgbAccordionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    ReactiveFormsModule
  ],
  bootstrap: [App]
})
export class AppModule { }