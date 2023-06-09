import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { PropertyListService } from 'src/app/services/property-list.service';
import { PropertyDetails } from 'src/app/components/utilities/propertyDetails';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
  constructor (
    private _activatedRoutes : ActivatedRoute,
    private _formBuilder : FormBuilder,
    private _propertyService : PropertyListService
    ){}
  
  id:any;
  contactForm:any;
  propertyDetail: PropertyDetails = {
    id: 0,
    title: '',
    price: 0,
    location: '',
    country: '',
    area: 0,
    bedrooms: 0,
    bathrooms: 0,
    status: '',
    description: '',
    image_url: '',
    owner_name:''
  };
  
  
  ngOnInit(): void {
    this.id = this._activatedRoutes.snapshot.paramMap.get('id');
    // console.log(this.id)
    
    this._propertyService.getPropertyDetailsById(this.id).subscribe(response =>{
      this.propertyDetail = response;
      console.log(response)
    });
    
    this.contactForm = new FormGroup ({
      name: new FormControl('' , [Validators.required]),
      email: new FormControl('' , [Validators.required , Validators.email]),
      phone: new FormControl('' , [Validators.required, Validators.pattern('[0-9]{10}')]),
      message: new FormControl('' , [Validators.required])
    })
  }

  getNameIcon (owner_name : string): string {
    const names = owner_name.split(' ');
    const IconNames = names.map(name => name.charAt(0).toUpperCase());
    // console.log('Hi');
    return IconNames.join('');
  }

  submitContactForm (data:any) :void {
   console.log(data) 
  }
}