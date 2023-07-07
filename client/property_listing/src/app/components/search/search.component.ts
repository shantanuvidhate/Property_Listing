import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  template: `
  <div class="px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-1 bg-white lg:bg-transparent lg:backdrop-blur rounded-lg">
    <app-drop-location></app-drop-location>
    <app-drop-status></app-drop-status>
    <app-drop-price></app-drop-price>
    <button class="bg-blue-800 hover:bg-blue-900 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg">
    <mat-icon>search</mat-icon>
    </button>
  </div>
  `,
  styles: [
  ]
})
export class SearchComponent {

}
