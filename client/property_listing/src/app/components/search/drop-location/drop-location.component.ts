import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-location',
  template: `
    <button mat-button [matMenuTriggerFor]="menu"> <mat-icon>location_on</mat-icon>Select Location</button>
    <mat-menu #menu="matMenu">
      <button mat-menu-item>California</button>
      <button mat-menu-item>Santa Barbra</button>
    </mat-menu>

  `,
  styles: [
  ]
})
export class DropLocationComponent {

}