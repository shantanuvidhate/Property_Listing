import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';
import { HouseListComponent } from './components/house-list/house-list.component';

const routes: Routes = [
  {
    component : HouseListComponent,
    path : ''
  },
  {
    component:PropertyDetailsComponent,
    path:'propertyDetail/:id'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
