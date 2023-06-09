import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { DropLocationComponent } from './components/search/drop-location/drop-location.component';
import { DropStatusComponent } from './components/search/drop-status/drop-status.component';
import { DropPriceComponent } from './components/search/drop-price/drop-price.component';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HouseListComponent } from './components/house-list/house-list.component';
import { HouseComponent } from './components/house/house.component';
import { HttpClientModule } from '@angular/common/http';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FilterPipe } from './components/utilities/pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LandingComponent,
    DropLocationComponent,
    DropStatusComponent,
    DropPriceComponent,
    HouseListComponent,
    HouseComponent,
    PropertyDetailsComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
