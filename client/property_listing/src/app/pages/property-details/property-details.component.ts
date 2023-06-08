import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

constructor (private _activatedRoutes : ActivatedRoute){}

  id:any;
  fullName : string = 'Tom Holland'

  ngOnInit(): void {
    this.id = this._activatedRoutes.snapshot.paramMap.get('id');
    console.log(this.id)
  }

  getNameIcon (): string {
    const names = this.fullName.split(' ');
    const IconNames = names.map(name => name.charAt(0).toUpperCase());
    console.log('Hi');
    return IconNames.join('');
  }


}
