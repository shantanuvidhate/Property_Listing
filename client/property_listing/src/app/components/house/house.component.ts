import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { PropertyListService } from 'src/app/services/property-list.service';
import { PropertyDetails } from '../utilities/propertyDetails';



@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  propertyData : Array<PropertyDetails> = [];
  constructor (
    private _propertyList : PropertyListService
  ) {}

  ngOnInit(): void {
    this._propertyList.getPropertyList().subscribe((data:any)=>{
      this.propertyData = data;
      console.log("PropertyData",this.propertyData)
    })

  }

}
