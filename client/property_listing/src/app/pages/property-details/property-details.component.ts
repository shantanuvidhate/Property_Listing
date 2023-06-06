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

  ngOnInit(): void {
    this.id = this._activatedRoutes.snapshot.paramMap.get('id');
    console.log(this.id)
  }


}
