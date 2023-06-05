import { Component } from '@angular/core';
import {OnInit} from '@angular/core'
import { PropertyListService } from 'src/app/services/property-list.service';

interface Property {
  _id: number;
  title: string;
  price: number;
  location: string;
  country: string;
  area: number;
  bedrooms: number;
  bathrooms: number;
  status: string;
  description: string;
  image_url: string;
}

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {
  propertyData : Property[] = [];
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
