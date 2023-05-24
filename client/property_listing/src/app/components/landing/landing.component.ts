import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
<section class="h-full max-h-[640px] mb-8 xl:mb-24">
    <div class="flex flex-col lg:flex-row">
        <div class="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
            <h1 class="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
                <span class="text-blue-900">Buy</span> Your Own Dream House With Us.
            </h1>
            <p class="max-w-[480px] mb-8">Discover your perfect home with our comprehensive property listing site. Whether you're searching for a cozy apartment, a spacious house, or a luxurious villa, we have an extensive collection of properties to suit every lifestyle and budget. </p>
        </div>
        <div class="hidden flex-1 lg:flex justify-end items-end">
            <img src="../../../assets/img/house-banner.png" alt="House Image">
        </div>
    </div>
    <app-search></app-search>
</section>
  `,
  styles: [
  ]
})
export class LandingComponent {

}
