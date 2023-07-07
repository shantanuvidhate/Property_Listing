import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-status',
  template: `
  <Menu as='div' class="dropdown relative border border-slate-400 rounded-lg">
    <button mat-button [matMenuTriggerFor]="menu" class="dropdown-btn w-full text-left" (click)="toggleExpand()">
       <mat-icon class="dropdown-icon-primary">home</mat-icon>
    <div>
      <div class="text-[15px] font-medium leading-tight">{{selectedPropertyType ? selectedPropertyType : 'Type' }}</div>
      <div class="text-[15px]">Property Type </div>
    </div>
    <mat-icon class="dropdown-icon-secondary"> {{isExpanded ? 'expand_less' : 'keyboard_arrow_down'}} </mat-icon>
  </button>
    <mat-menu #menu="matMenu" class="cursor-pointer hover:text-white-700">
      <button (click)="toggleExpand()" mat-menu-item *ngFor="let propertyType of propertyTypes" (click)="selectPropertyType(propertyType)">{{propertyType}}</button>
    </mat-menu>
  </Menu>
  `,
  styles: [
  ]
})
export class DropStatusComponent {

  isExpanded: boolean = false;
  propertyTypes :string[] = ['All' , 'Sell' , 'Rent'];      // ------> later to be get by API on ngOninit
  selectedPropertyType : string | null= null;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

  selectPropertyType (propertyType:string) : void {
    this.selectedPropertyType = propertyType;
  }

}
