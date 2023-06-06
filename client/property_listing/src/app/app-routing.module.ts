import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyDetailsComponent } from './pages/property-details/property-details.component';

const routes: Routes = [
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
