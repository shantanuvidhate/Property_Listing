import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-location',
  template: `
  <Menu as='div' class="dropdown relative border border-slate-400 rounded-lg">
    <button mat-button [matMenuTriggerFor]="menu" class="dropdown-btn w-full text-left" (click)="toggleExpand()">
       <mat-icon class="dropdown-icon-primary">location_on</mat-icon>
    <div>
      <div class="text-[15px] font-medium leading-tight">Location</div>
      <div class="text-[15px]">Select Location</div>
    </div>
    <mat-icon class="dropdown-icon-secondary"> {{isExpanded ? 'expand_less' : 'keyboard_arrow_down'}} </mat-icon>
  </button>
    <mat-menu #menu="matMenu" class="cursor-pointer hover:text-white-700">
      <button mat-menu-item>California</button>
      <button mat-menu-item>Santa Barbra</button>
    </mat-menu>
  </Menu>

  `,
  styles: [
  ]
})
export class DropLocationComponent {

  isExpanded: boolean = false;

  toggleExpand(): void {
    this.isExpanded = !this.isExpanded;
  }

}