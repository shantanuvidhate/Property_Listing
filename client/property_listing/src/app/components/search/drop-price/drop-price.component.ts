import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-price',
  template: `
    <Menu as='div' class="dropdown relative border border-slate-400 rounded-lg">
    <button mat-button [matMenuTriggerFor]="menu" class="dropdown-btn w-full text-left" (click)="toggleExpand()">
       <mat-icon class="dropdown-icon-primary">account_balance_wallet</mat-icon>
    <div>
      <div class="text-[15px] font-medium leading-tight">{{selectedPriceRange ? selectedPriceRange : 'Price' }}</div>
      <div class="text-[15px]">Price Range </div>
    </div>
    <mat-icon class="dropdown-icon-secondary"> {{isExpanded ? 'expand_less' : 'keyboard_arrow_down'}} </mat-icon>
  </button>
    <mat-menu #menu="matMenu" class="cursor-pointer hover:text-white-700">
      <button (click)="toggleExpand()" mat-menu-item *ngFor="let priceRange of priceRanges" (click)="selectPriceRange(priceRange)">{{priceRange}}</button>
    </mat-menu>
  </Menu>
  `,
  styles: [
  ]
})
export class DropPriceComponent {
  
  isExpanded: boolean = false;
  priceRanges :string[] = [];      
  selectedPriceRange : string | null= null;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  selectPriceRange (priceRange:string) : void {
    this.selectedPriceRange = priceRange;
  }
}
