import { Component } from '@angular/core';

@Component({
  selector: 'app-house-list',
  template: `
    <section class="mb-20">
      <div class="container mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
          <app-house></app-house>
          
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class HouseListComponent {}
